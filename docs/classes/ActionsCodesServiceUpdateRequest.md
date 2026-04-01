[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActionsCodesServiceUpdateRequest

# Class: ActionsCodesServiceUpdateRequest

Request message for updating an existing Action Code record.
Only applicable for records in `DRAFT` or `REVISION` states.
This message allows for modifying the visual properties, naming, and
metadata of an established Action Code.

**Note:** Only fields provided in the request will typically be updated.
The unique system ID is required to locate the target record.

**`Generated`**

from message Scailo.ActionsCodesServiceUpdateRequest

## Hierarchy

- `Message`\<[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)\>

  ↳ **`ActionsCodesServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ActionsCodesServiceUpdateRequest.md#constructor)

### Properties

- [bgColor](ActionsCodesServiceUpdateRequest.md#bgcolor)
- [description](ActionsCodesServiceUpdateRequest.md#description)
- [fgColor](ActionsCodesServiceUpdateRequest.md#fgcolor)
- [id](ActionsCodesServiceUpdateRequest.md#id)
- [name](ActionsCodesServiceUpdateRequest.md#name)
- [notifyUsers](ActionsCodesServiceUpdateRequest.md#notifyusers)
- [userComment](ActionsCodesServiceUpdateRequest.md#usercomment)
- [fields](ActionsCodesServiceUpdateRequest.md#fields)
- [runtime](ActionsCodesServiceUpdateRequest.md#runtime)
- [typeName](ActionsCodesServiceUpdateRequest.md#typename)

### Methods

- [clone](ActionsCodesServiceUpdateRequest.md#clone)
- [equals](ActionsCodesServiceUpdateRequest.md#equals)
- [fromBinary](ActionsCodesServiceUpdateRequest.md#frombinary)
- [fromJson](ActionsCodesServiceUpdateRequest.md#fromjson)
- [fromJsonString](ActionsCodesServiceUpdateRequest.md#fromjsonstring)
- [getType](ActionsCodesServiceUpdateRequest.md#gettype)
- [toBinary](ActionsCodesServiceUpdateRequest.md#tobinary)
- [toJSON](ActionsCodesServiceUpdateRequest.md#tojson)
- [toJson](ActionsCodesServiceUpdateRequest.md#tojson-1)
- [toJsonString](ActionsCodesServiceUpdateRequest.md#tojsonstring)
- [equals](ActionsCodesServiceUpdateRequest.md#equals-1)
- [fromBinary](ActionsCodesServiceUpdateRequest.md#frombinary-1)
- [fromJson](ActionsCodesServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](ActionsCodesServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActionsCodesServiceUpdateRequest**(`data?`): [`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)\> |

#### Returns

[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Overrides

Message\&lt;ActionsCodesServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/actions_codes.scailo_pb.ts:394](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L394)

## Properties

### bgColor

• **bgColor**: `string` = `""`

**`Optional`**

**`Description`**

The updated Hexadecimal background color.

**`Example`**

```ts
"#FFFF00"
```

**`Regex`**

"^#[0-9a-fA-F]{6}$"

**`Format`**

Must be a 6-digit hex code starting with #.

**`Generated`**

from field: string bg_color = 13;

#### Defined in

[src/actions_codes.scailo_pb.ts:376](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L376)

___

### description

• **description**: `string` = `""`

**`Optional`**

**`Description`**

An updated detailed description of the action code's purpose.

**`Example`**

```ts
"Revised to include high-priority hardware failures."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string description = 18;

#### Defined in

[src/actions_codes.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L392)

___

### fgColor

• **fgColor**: `string` = `""`

**`Optional`**

**`Description`**

The updated Hexadecimal foreground (text) color.

**`Example`**

```ts
"#000000"
```

**`Regex`**

"^#[0-9a-fA-F]{6}$"

**`Format`**

Must be a 6-digit hex code starting with #.

**`Generated`**

from field: string fg_color = 12;

#### Defined in

[src/actions_codes.scailo_pb.ts:360](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L360)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique system identifier of the Action Code to be updated. Must be a value greater than `0`.

**`Example`**

```ts
402
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/actions_codes.scailo_pb.ts:316](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L316)

___

### name

• **name**: `string` = `""`

**`Mandatory`**

**`Description`**

The updated display name of the action code. Must contain at least 1 character.

**`Example`**

```ts
"Emergency Maintenance"
```

**`Regex`**

.+

**`Format`**

May contain any UTF-8 characters.

**`Generated`**

from field: string name = 10;

#### Defined in

[src/actions_codes.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L344)

___

### notifyUsers

• **notifyUsers**: `boolean` = `false`

**`Optional`**

**`Description`**

Flag to trigger system notifications to relevant users upon update. Set to true if subsequent workflows (like verification) depend on this change.

**`Example`**

```ts
true
```

**`Generated`**

from field: bool notify_users = 3;

#### Defined in

[src/actions_codes.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L328)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for this specific update. Captured in the version history for administrative tracking.

**`Example`**

```ts
"Updating brand colors to match new UI guidelines."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/actions_codes.scailo_pb.ts:300](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L300)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/actions_codes.scailo_pb.ts:401](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L401)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/actions_codes.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L399)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActionsCodesServiceUpdateRequest"``

#### Defined in

[src/actions_codes.scailo_pb.ts:400](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L400)

## Methods

### clone

▸ **clone**(): [`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md) \| `PlainMessage`\<[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md) \| `PlainMessage`\<[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md) \| `PlainMessage`\<[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/actions_codes.scailo_pb.ts:423](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L423)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L411)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:415](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L415)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActionsCodesServiceUpdateRequest`](ActionsCodesServiceUpdateRequest.md)

#### Defined in

[src/actions_codes.scailo_pb.ts:419](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/actions_codes.scailo_pb.ts#L419)

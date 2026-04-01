[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OvertimesServiceCreateRequest

# Class: OvertimesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.OvertimesServiceCreateRequest

## Hierarchy

- `Message`\<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\>

  ↳ **`OvertimesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](OvertimesServiceCreateRequest.md#constructor)

### Properties

- [description](OvertimesServiceCreateRequest.md#description)
- [entityUuid](OvertimesServiceCreateRequest.md#entityuuid)
- [formData](OvertimesServiceCreateRequest.md#formdata)
- [fromTimestamp](OvertimesServiceCreateRequest.md#fromtimestamp)
- [referenceId](OvertimesServiceCreateRequest.md#referenceid)
- [toTimestamp](OvertimesServiceCreateRequest.md#totimestamp)
- [userComment](OvertimesServiceCreateRequest.md#usercomment)
- [userId](OvertimesServiceCreateRequest.md#userid)
- [vaultFolderId](OvertimesServiceCreateRequest.md#vaultfolderid)
- [fields](OvertimesServiceCreateRequest.md#fields)
- [runtime](OvertimesServiceCreateRequest.md#runtime)
- [typeName](OvertimesServiceCreateRequest.md#typename)

### Methods

- [clone](OvertimesServiceCreateRequest.md#clone)
- [equals](OvertimesServiceCreateRequest.md#equals)
- [fromBinary](OvertimesServiceCreateRequest.md#frombinary)
- [fromJson](OvertimesServiceCreateRequest.md#fromjson)
- [fromJsonString](OvertimesServiceCreateRequest.md#fromjsonstring)
- [getType](OvertimesServiceCreateRequest.md#gettype)
- [toBinary](OvertimesServiceCreateRequest.md#tobinary)
- [toJSON](OvertimesServiceCreateRequest.md#tojson)
- [toJson](OvertimesServiceCreateRequest.md#tojson-1)
- [toJsonString](OvertimesServiceCreateRequest.md#tojsonstring)
- [equals](OvertimesServiceCreateRequest.md#equals-1)
- [fromBinary](OvertimesServiceCreateRequest.md#frombinary-1)
- [fromJson](OvertimesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](OvertimesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OvertimesServiceCreateRequest**(`data?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Overrides

Message\&lt;OvertimesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/overtimes.scailo_pb.ts:215](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L215)

## Properties

### description

• **description**: `string` = `""`

The description of the overtime

**`Generated`**

from field: string description = 14;

#### Defined in

[src/overtimes.scailo_pb.ts:206](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L206)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/overtimes.scailo_pb.ts:139](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L139)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/overtimes.scailo_pb.ts:213](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L213)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the overtime begins

**`Generated`**

from field: uint64 from_timestamp = 12;

#### Defined in

[src/overtimes.scailo_pb.ts:192](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L192)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/overtimes.scailo_pb.ts:178](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L178)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

The UNIX timestamp from when the overtime ends

**`Generated`**

from field: uint64 to_timestamp = 13;

#### Defined in

[src/overtimes.scailo_pb.ts:199](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L199)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/overtimes.scailo_pb.ts:146](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L146)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

The ID of the user who has requested for overtime

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/overtimes.scailo_pb.ts:185](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L185)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/overtimes.scailo_pb.ts:162](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L162)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/overtimes.scailo_pb.ts:222](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L222)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/overtimes.scailo_pb.ts:220](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L220)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OvertimesServiceCreateRequest"``

#### Defined in

[src/overtimes.scailo_pb.ts:221](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L221)

## Methods

### clone

▸ **clone**(): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md) \| `PlainMessage`\<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md) \| `PlainMessage`\<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md) \| `PlainMessage`\<[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/overtimes.scailo_pb.ts:246](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L246)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Defined in

[src/overtimes.scailo_pb.ts:234](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L234)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Defined in

[src/overtimes.scailo_pb.ts:238](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L238)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OvertimesServiceCreateRequest`](OvertimesServiceCreateRequest.md)

#### Defined in

[src/overtimes.scailo_pb.ts:242](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/overtimes.scailo_pb.ts#L242)

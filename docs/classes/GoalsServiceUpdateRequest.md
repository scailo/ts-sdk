[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / GoalsServiceUpdateRequest

# Class: GoalsServiceUpdateRequest

Describes the parameters necessary to update a record

**`Generated`**

from message Scailo.GoalsServiceUpdateRequest

## Hierarchy

- `Message`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\>

  ↳ **`GoalsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](GoalsServiceUpdateRequest.md#constructor)

### Properties

- [description](GoalsServiceUpdateRequest.md#description)
- [endDate](GoalsServiceUpdateRequest.md#enddate)
- [formData](GoalsServiceUpdateRequest.md#formdata)
- [id](GoalsServiceUpdateRequest.md#id)
- [notifyUsers](GoalsServiceUpdateRequest.md#notifyusers)
- [referenceId](GoalsServiceUpdateRequest.md#referenceid)
- [startDate](GoalsServiceUpdateRequest.md#startdate)
- [userComment](GoalsServiceUpdateRequest.md#usercomment)
- [vaultFolderId](GoalsServiceUpdateRequest.md#vaultfolderid)
- [fields](GoalsServiceUpdateRequest.md#fields)
- [runtime](GoalsServiceUpdateRequest.md#runtime)
- [typeName](GoalsServiceUpdateRequest.md#typename)

### Methods

- [clone](GoalsServiceUpdateRequest.md#clone)
- [equals](GoalsServiceUpdateRequest.md#equals)
- [fromBinary](GoalsServiceUpdateRequest.md#frombinary)
- [fromJson](GoalsServiceUpdateRequest.md#fromjson)
- [fromJsonString](GoalsServiceUpdateRequest.md#fromjsonstring)
- [getType](GoalsServiceUpdateRequest.md#gettype)
- [toBinary](GoalsServiceUpdateRequest.md#tobinary)
- [toJSON](GoalsServiceUpdateRequest.md#tojson)
- [toJson](GoalsServiceUpdateRequest.md#tojson-1)
- [toJsonString](GoalsServiceUpdateRequest.md#tojsonstring)
- [equals](GoalsServiceUpdateRequest.md#equals-1)
- [fromBinary](GoalsServiceUpdateRequest.md#frombinary-1)
- [fromJson](GoalsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](GoalsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new GoalsServiceUpdateRequest**(`data?`): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\> |

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Overrides

Message\&lt;GoalsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/goals.scailo_pb.ts:506](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L506)

## Properties

### description

• **description**: `string` = `""`

The description of the goal

**`Generated`**

from field: string description = 20;

#### Defined in

[src/goals.scailo_pb.ts:490](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L490)

___

### endDate

• **endDate**: `string` = `""`

The date until which the goal remains into force

**`Generated`**

from field: string end_date = 14;

#### Defined in

[src/goals.scailo_pb.ts:483](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L483)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/goals.scailo_pb.ts:504](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L504)

___

### id

• **id**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique internal identifier of the target record that needs to be updated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/goals.scailo_pb.ts:425](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L425)

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

[src/goals.scailo_pb.ts:437](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L437)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

Updated alphanumeric reference ID. Must contain at least 1 character.

**`Example`**

```ts
"ABS-2023-001-REV"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/goals.scailo_pb.ts:469](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L469)

___

### startDate

• **startDate**: `string` = `""`

The date from which the goal comes into force

**`Generated`**

from field: string start_date = 13;

#### Defined in

[src/goals.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L476)

___

### userComment

• **userComment**: `string` = `""`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"This is a comment for audit purposes."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/goals.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L409)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Updated vault folder ID for documentation storage.

**`Example`**

```ts
15235
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 vault_folder_id = 9;

#### Defined in

[src/goals.scailo_pb.ts:453](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L453)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/goals.scailo_pb.ts:513](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L513)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/goals.scailo_pb.ts:511](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L511)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.GoalsServiceUpdateRequest"``

#### Defined in

[src/goals.scailo_pb.ts:512](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L512)

## Methods

### clone

▸ **clone**(): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md) \| `PlainMessage`\<[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/goals.scailo_pb.ts:537](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L537)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L525)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L529)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`GoalsServiceUpdateRequest`](GoalsServiceUpdateRequest.md)

#### Defined in

[src/goals.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/goals.scailo_pb.ts#L533)

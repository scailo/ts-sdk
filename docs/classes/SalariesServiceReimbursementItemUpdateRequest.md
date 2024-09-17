[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceReimbursementItemUpdateRequest

# Class: SalariesServiceReimbursementItemUpdateRequest

Describes the parameters required to update an reimbursement item in a salary

**`Generated`**

from message Scailo.SalariesServiceReimbursementItemUpdateRequest

## Hierarchy

- `Message`\<[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)\>

  ↳ **`SalariesServiceReimbursementItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](SalariesServiceReimbursementItemUpdateRequest.md#constructor)

### Properties

- [amount](SalariesServiceReimbursementItemUpdateRequest.md#amount)
- [id](SalariesServiceReimbursementItemUpdateRequest.md#id)
- [userComment](SalariesServiceReimbursementItemUpdateRequest.md#usercomment)
- [fields](SalariesServiceReimbursementItemUpdateRequest.md#fields)
- [runtime](SalariesServiceReimbursementItemUpdateRequest.md#runtime)
- [typeName](SalariesServiceReimbursementItemUpdateRequest.md#typename)

### Methods

- [clone](SalariesServiceReimbursementItemUpdateRequest.md#clone)
- [equals](SalariesServiceReimbursementItemUpdateRequest.md#equals)
- [fromBinary](SalariesServiceReimbursementItemUpdateRequest.md#frombinary)
- [fromJson](SalariesServiceReimbursementItemUpdateRequest.md#fromjson)
- [fromJsonString](SalariesServiceReimbursementItemUpdateRequest.md#fromjsonstring)
- [getType](SalariesServiceReimbursementItemUpdateRequest.md#gettype)
- [toBinary](SalariesServiceReimbursementItemUpdateRequest.md#tobinary)
- [toJSON](SalariesServiceReimbursementItemUpdateRequest.md#tojson)
- [toJson](SalariesServiceReimbursementItemUpdateRequest.md#tojson-1)
- [toJsonString](SalariesServiceReimbursementItemUpdateRequest.md#tojsonstring)
- [equals](SalariesServiceReimbursementItemUpdateRequest.md#equals-1)
- [fromBinary](SalariesServiceReimbursementItemUpdateRequest.md#frombinary-1)
- [fromJson](SalariesServiceReimbursementItemUpdateRequest.md#fromjson-1)
- [fromJsonString](SalariesServiceReimbursementItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceReimbursementItemUpdateRequest**(`data?`): [`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)\> |

#### Returns

[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

#### Overrides

Message\&lt;SalariesServiceReimbursementItemUpdateRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:1758

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The total amount of this item (in cents)

**`Generated`**

from field: int64 amount = 13;

#### Defined in

src/salaries.scailo_pb.ts:1756

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/salaries.scailo_pb.ts:1749

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/salaries.scailo_pb.ts:1742

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:1765

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:1763

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceReimbursementItemUpdateRequest"``

#### Defined in

src/salaries.scailo_pb.ts:1764

## Methods

### clone

▸ **clone**(): [`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md) \| `PlainMessage`\<[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1783

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1771

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1775

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceReimbursementItemUpdateRequest`](SalariesServiceReimbursementItemUpdateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1779

[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceReimbursementItemCreateRequest

# Class: SalariesServiceReimbursementItemCreateRequest

Describes the parameters required to add an reimbursement item to a salary

**`Generated`**

from message Scailo.SalariesServiceReimbursementItemCreateRequest

## Hierarchy

- `Message`\<[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)\>

  ↳ **`SalariesServiceReimbursementItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalariesServiceReimbursementItemCreateRequest.md#constructor)

### Properties

- [amount](SalariesServiceReimbursementItemCreateRequest.md#amount)
- [refFrom](SalariesServiceReimbursementItemCreateRequest.md#reffrom)
- [refId](SalariesServiceReimbursementItemCreateRequest.md#refid)
- [salaryId](SalariesServiceReimbursementItemCreateRequest.md#salaryid)
- [userComment](SalariesServiceReimbursementItemCreateRequest.md#usercomment)
- [fields](SalariesServiceReimbursementItemCreateRequest.md#fields)
- [runtime](SalariesServiceReimbursementItemCreateRequest.md#runtime)
- [typeName](SalariesServiceReimbursementItemCreateRequest.md#typename)

### Methods

- [clone](SalariesServiceReimbursementItemCreateRequest.md#clone)
- [equals](SalariesServiceReimbursementItemCreateRequest.md#equals)
- [fromBinary](SalariesServiceReimbursementItemCreateRequest.md#frombinary)
- [fromJson](SalariesServiceReimbursementItemCreateRequest.md#fromjson)
- [fromJsonString](SalariesServiceReimbursementItemCreateRequest.md#fromjsonstring)
- [getType](SalariesServiceReimbursementItemCreateRequest.md#gettype)
- [toBinary](SalariesServiceReimbursementItemCreateRequest.md#tobinary)
- [toJSON](SalariesServiceReimbursementItemCreateRequest.md#tojson)
- [toJson](SalariesServiceReimbursementItemCreateRequest.md#tojson-1)
- [toJsonString](SalariesServiceReimbursementItemCreateRequest.md#tojsonstring)
- [equals](SalariesServiceReimbursementItemCreateRequest.md#equals-1)
- [fromBinary](SalariesServiceReimbursementItemCreateRequest.md#frombinary-1)
- [fromJson](SalariesServiceReimbursementItemCreateRequest.md#fromjson-1)
- [fromJsonString](SalariesServiceReimbursementItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceReimbursementItemCreateRequest**(`data?`): [`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)\> |

#### Returns

[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

#### Overrides

Message\&lt;SalariesServiceReimbursementItemCreateRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:1698

## Properties

### amount

• **amount**: `bigint` = `protoInt64.zero`

The total amount of this item (in cents)

**`Generated`**

from field: int64 amount = 13;

#### Defined in

src/salaries.scailo_pb.ts:1696

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

src/salaries.scailo_pb.ts:1682

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 12;

#### Defined in

src/salaries.scailo_pb.ts:1689

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

src/salaries.scailo_pb.ts:1675

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/salaries.scailo_pb.ts:1668

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:1705

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:1703

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceReimbursementItemCreateRequest"``

#### Defined in

src/salaries.scailo_pb.ts:1704

## Methods

### clone

▸ **clone**(): [`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:1725

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1713

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1717

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceReimbursementItemCreateRequest`](SalariesServiceReimbursementItemCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:1721

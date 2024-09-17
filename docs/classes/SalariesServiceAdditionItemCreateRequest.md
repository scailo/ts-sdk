[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServiceAdditionItemCreateRequest

# Class: SalariesServiceAdditionItemCreateRequest

Describes the parameters required to add an addition item to a salary

**`Generated`**

from message Scailo.SalariesServiceAdditionItemCreateRequest

## Hierarchy

- `Message`\<[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)\>

  ↳ **`SalariesServiceAdditionItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](SalariesServiceAdditionItemCreateRequest.md#constructor)

### Properties

- [quantity](SalariesServiceAdditionItemCreateRequest.md#quantity)
- [refFrom](SalariesServiceAdditionItemCreateRequest.md#reffrom)
- [refId](SalariesServiceAdditionItemCreateRequest.md#refid)
- [salaryId](SalariesServiceAdditionItemCreateRequest.md#salaryid)
- [userComment](SalariesServiceAdditionItemCreateRequest.md#usercomment)
- [fields](SalariesServiceAdditionItemCreateRequest.md#fields)
- [runtime](SalariesServiceAdditionItemCreateRequest.md#runtime)
- [typeName](SalariesServiceAdditionItemCreateRequest.md#typename)

### Methods

- [clone](SalariesServiceAdditionItemCreateRequest.md#clone)
- [equals](SalariesServiceAdditionItemCreateRequest.md#equals)
- [fromBinary](SalariesServiceAdditionItemCreateRequest.md#frombinary)
- [fromJson](SalariesServiceAdditionItemCreateRequest.md#fromjson)
- [fromJsonString](SalariesServiceAdditionItemCreateRequest.md#fromjsonstring)
- [getType](SalariesServiceAdditionItemCreateRequest.md#gettype)
- [toBinary](SalariesServiceAdditionItemCreateRequest.md#tobinary)
- [toJSON](SalariesServiceAdditionItemCreateRequest.md#tojson)
- [toJson](SalariesServiceAdditionItemCreateRequest.md#tojson-1)
- [toJsonString](SalariesServiceAdditionItemCreateRequest.md#tojsonstring)
- [equals](SalariesServiceAdditionItemCreateRequest.md#equals-1)
- [fromBinary](SalariesServiceAdditionItemCreateRequest.md#frombinary-1)
- [fromJson](SalariesServiceAdditionItemCreateRequest.md#fromjson-1)
- [fromJsonString](SalariesServiceAdditionItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServiceAdditionItemCreateRequest**(`data?`): [`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)\> |

#### Returns

[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

#### Overrides

Message\&lt;SalariesServiceAdditionItemCreateRequest\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:922

## Properties

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The total quantity of this item (in cents)

**`Generated`**

from field: int64 quantity = 13;

#### Defined in

src/salaries.scailo_pb.ts:920

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 11;

#### Defined in

src/salaries.scailo_pb.ts:906

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: int64 ref_id = 12;

#### Defined in

src/salaries.scailo_pb.ts:913

___

### salaryId

• **salaryId**: `bigint` = `protoInt64.zero`

Stores the salary ID

**`Generated`**

from field: int64 salary_id = 10;

#### Defined in

src/salaries.scailo_pb.ts:899

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/salaries.scailo_pb.ts:892

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:929

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:927

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServiceAdditionItemCreateRequest"``

#### Defined in

src/salaries.scailo_pb.ts:928

## Methods

### clone

▸ **clone**(): [`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

Create a deep copy.

#### Returns

[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)\> |
| `b` | `undefined` \| [`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md) \| `PlainMessage`\<[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:949

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:937

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:941

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServiceAdditionItemCreateRequest`](SalariesServiceAdditionItemCreateRequest.md)

#### Defined in

src/salaries.scailo_pb.ts:945

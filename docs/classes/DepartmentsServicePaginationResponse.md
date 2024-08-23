[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServicePaginationResponse

# Class: DepartmentsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.DepartmentsServicePaginationResponse

## Hierarchy

- `Message`\<[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)\>

  ↳ **`DepartmentsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](DepartmentsServicePaginationResponse.md#constructor)

### Properties

- [count](DepartmentsServicePaginationResponse.md#count)
- [offset](DepartmentsServicePaginationResponse.md#offset)
- [payload](DepartmentsServicePaginationResponse.md#payload)
- [total](DepartmentsServicePaginationResponse.md#total)
- [fields](DepartmentsServicePaginationResponse.md#fields)
- [runtime](DepartmentsServicePaginationResponse.md#runtime)
- [typeName](DepartmentsServicePaginationResponse.md#typename)

### Methods

- [clone](DepartmentsServicePaginationResponse.md#clone)
- [equals](DepartmentsServicePaginationResponse.md#equals)
- [fromBinary](DepartmentsServicePaginationResponse.md#frombinary)
- [fromJson](DepartmentsServicePaginationResponse.md#fromjson)
- [fromJsonString](DepartmentsServicePaginationResponse.md#fromjsonstring)
- [getType](DepartmentsServicePaginationResponse.md#gettype)
- [toBinary](DepartmentsServicePaginationResponse.md#tobinary)
- [toJSON](DepartmentsServicePaginationResponse.md#tojson)
- [toJson](DepartmentsServicePaginationResponse.md#tojson-1)
- [toJsonString](DepartmentsServicePaginationResponse.md#tojsonstring)
- [equals](DepartmentsServicePaginationResponse.md#equals-1)
- [fromBinary](DepartmentsServicePaginationResponse.md#frombinary-1)
- [fromJson](DepartmentsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](DepartmentsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServicePaginationResponse**(`data?`): [`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)\> |

#### Returns

[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

#### Overrides

Message\&lt;DepartmentsServicePaginationResponse\&gt;.constructor

#### Defined in

src/departments.scailo_pb.ts:570

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/departments.scailo_pb.ts:547

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/departments.scailo_pb.ts:554

___

### payload

• **payload**: [`Department`](Department.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Department payload = 4;

#### Defined in

src/departments.scailo_pb.ts:568

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/departments.scailo_pb.ts:561

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/departments.scailo_pb.ts:577

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/departments.scailo_pb.ts:575

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServicePaginationResponse"``

#### Defined in

src/departments.scailo_pb.ts:576

## Methods

### clone

▸ **clone**(): [`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md) \| `PlainMessage`\<[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md) \| `PlainMessage`\<[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md) \| `PlainMessage`\<[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/departments.scailo_pb.ts:596

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

#### Defined in

src/departments.scailo_pb.ts:584

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

#### Defined in

src/departments.scailo_pb.ts:588

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServicePaginationResponse`](DepartmentsServicePaginationResponse.md)

#### Defined in

src/departments.scailo_pb.ts:592

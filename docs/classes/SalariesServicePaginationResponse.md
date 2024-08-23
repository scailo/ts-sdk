[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / SalariesServicePaginationResponse

# Class: SalariesServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.SalariesServicePaginationResponse

## Hierarchy

- `Message`\<[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)\>

  ↳ **`SalariesServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](SalariesServicePaginationResponse.md#constructor)

### Properties

- [count](SalariesServicePaginationResponse.md#count)
- [offset](SalariesServicePaginationResponse.md#offset)
- [payload](SalariesServicePaginationResponse.md#payload)
- [total](SalariesServicePaginationResponse.md#total)
- [fields](SalariesServicePaginationResponse.md#fields)
- [runtime](SalariesServicePaginationResponse.md#runtime)
- [typeName](SalariesServicePaginationResponse.md#typename)

### Methods

- [clone](SalariesServicePaginationResponse.md#clone)
- [equals](SalariesServicePaginationResponse.md#equals)
- [fromBinary](SalariesServicePaginationResponse.md#frombinary)
- [fromJson](SalariesServicePaginationResponse.md#fromjson)
- [fromJsonString](SalariesServicePaginationResponse.md#fromjsonstring)
- [getType](SalariesServicePaginationResponse.md#gettype)
- [toBinary](SalariesServicePaginationResponse.md#tobinary)
- [toJSON](SalariesServicePaginationResponse.md#tojson)
- [toJson](SalariesServicePaginationResponse.md#tojson-1)
- [toJsonString](SalariesServicePaginationResponse.md#tojsonstring)
- [equals](SalariesServicePaginationResponse.md#equals-1)
- [fromBinary](SalariesServicePaginationResponse.md#frombinary-1)
- [fromJson](SalariesServicePaginationResponse.md#fromjson-1)
- [fromJsonString](SalariesServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalariesServicePaginationResponse**(`data?`): [`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)\> |

#### Returns

[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

#### Overrides

Message\&lt;SalariesServicePaginationResponse\&gt;.constructor

#### Defined in

src/salaries.scailo_pb.ts:2161

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/salaries.scailo_pb.ts:2138

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: int64 offset = 2;

#### Defined in

src/salaries.scailo_pb.ts:2145

___

### payload

• **payload**: [`Salary`](Salary.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.Salary payload = 4;

#### Defined in

src/salaries.scailo_pb.ts:2159

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: int64 total = 3;

#### Defined in

src/salaries.scailo_pb.ts:2152

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/salaries.scailo_pb.ts:2168

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/salaries.scailo_pb.ts:2166

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalariesServicePaginationResponse"``

#### Defined in

src/salaries.scailo_pb.ts:2167

## Methods

### clone

▸ **clone**(): [`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md) \| `PlainMessage`\<[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md) \| `PlainMessage`\<[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md) \| `PlainMessage`\<[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/salaries.scailo_pb.ts:2187

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

#### Defined in

src/salaries.scailo_pb.ts:2175

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

#### Defined in

src/salaries.scailo_pb.ts:2179

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalariesServicePaginationResponse`](SalariesServicePaginationResponse.md)

#### Defined in

src/salaries.scailo_pb.ts:2183

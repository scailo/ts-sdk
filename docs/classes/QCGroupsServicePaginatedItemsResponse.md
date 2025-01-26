[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCGroupsServicePaginatedItemsResponse

# Class: QCGroupsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.QCGroupsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)\>

  ↳ **`QCGroupsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](QCGroupsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](QCGroupsServicePaginatedItemsResponse.md#count)
- [offset](QCGroupsServicePaginatedItemsResponse.md#offset)
- [payload](QCGroupsServicePaginatedItemsResponse.md#payload)
- [total](QCGroupsServicePaginatedItemsResponse.md#total)
- [fields](QCGroupsServicePaginatedItemsResponse.md#fields)
- [runtime](QCGroupsServicePaginatedItemsResponse.md#runtime)
- [typeName](QCGroupsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](QCGroupsServicePaginatedItemsResponse.md#clone)
- [equals](QCGroupsServicePaginatedItemsResponse.md#equals)
- [fromBinary](QCGroupsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](QCGroupsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](QCGroupsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](QCGroupsServicePaginatedItemsResponse.md#gettype)
- [toBinary](QCGroupsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](QCGroupsServicePaginatedItemsResponse.md#tojson)
- [toJson](QCGroupsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](QCGroupsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](QCGroupsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](QCGroupsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](QCGroupsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](QCGroupsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCGroupsServicePaginatedItemsResponse**(`data?`): [`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)\> |

#### Returns

[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;QCGroupsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

src/qc_groups.scailo_pb.ts:1342

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/qc_groups.scailo_pb.ts:1319

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/qc_groups.scailo_pb.ts:1326

___

### payload

• **payload**: [`QCGroupItem`](QCGroupItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.QCGroupItem payload = 4;

#### Defined in

src/qc_groups.scailo_pb.ts:1340

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/qc_groups.scailo_pb.ts:1333

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_groups.scailo_pb.ts:1349

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_groups.scailo_pb.ts:1347

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCGroupsServicePaginatedItemsResponse"``

#### Defined in

src/qc_groups.scailo_pb.ts:1348

## Methods

### clone

▸ **clone**(): [`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_groups.scailo_pb.ts:1368

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

#### Defined in

src/qc_groups.scailo_pb.ts:1356

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

#### Defined in

src/qc_groups.scailo_pb.ts:1360

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCGroupsServicePaginatedItemsResponse`](QCGroupsServicePaginatedItemsResponse.md)

#### Defined in

src/qc_groups.scailo_pb.ts:1364

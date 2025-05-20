[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse

# Class: InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse

## Hierarchy

- `Message`\<[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)\>

  ↳ **`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#constructor)

### Properties

- [count](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#count)
- [offset](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#offset)
- [payload](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#payload)
- [total](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#total)
- [fields](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#fields)
- [runtime](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#runtime)
- [typeName](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#typename)

### Methods

- [clone](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#clone)
- [equals](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#equals)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#frombinary)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#fromjson)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#fromjsonstring)
- [getType](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#gettype)
- [toBinary](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#tobinary)
- [toJSON](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#tojson)
- [toJson](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#tojson-1)
- [toJsonString](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#tojsonstring)
- [equals](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#equals-1)
- [fromBinary](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#frombinary-1)
- [fromJson](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse**(`data?`): [`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

#### Overrides

Message\&lt;InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse\&gt;.constructor

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1544

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1521

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1528

___

### payload

• **payload**: [`InwardJobFreeIssueMaterialReturn`](InwardJobFreeIssueMaterialReturn.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.InwardJobFreeIssueMaterialReturn payload = 4;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1542

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1535

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1551

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1549

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse"``

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1550

## Methods

### clone

▸ **clone**(): [`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md) \| `PlainMessage`\<[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1570

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1558

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1562

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse`](InwardJobsFreeIssueMaterialsReturnsServicePaginationResponse.md)

#### Defined in

src/inward_jobs_free_issue_materials_returns.scailo_pb.ts:1566

[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsFreeIssueMaterialsServicePaginationResponse

# Class: OutwardJobsFreeIssueMaterialsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.OutwardJobsFreeIssueMaterialsServicePaginationResponse

## Hierarchy

- `Message`\<[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)\>

  ↳ **`OutwardJobsFreeIssueMaterialsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#constructor)

### Properties

- [count](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#count)
- [offset](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#offset)
- [payload](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#payload)
- [total](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#total)
- [fields](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#fields)
- [runtime](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#runtime)
- [typeName](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#typename)

### Methods

- [clone](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#clone)
- [equals](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#equals)
- [fromBinary](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#frombinary)
- [fromJson](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#fromjson)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#fromjsonstring)
- [getType](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#gettype)
- [toBinary](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#tobinary)
- [toJSON](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#tojson)
- [toJson](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#tojson-1)
- [toJsonString](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#tojsonstring)
- [equals](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#equals-1)
- [fromBinary](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#frombinary-1)
- [fromJson](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsFreeIssueMaterialsServicePaginationResponse**(`data?`): [`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Overrides

Message\&lt;OutwardJobsFreeIssueMaterialsServicePaginationResponse\&gt;.constructor

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1575

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1552

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1559

___

### payload

• **payload**: [`OutwardJobFreeIssueMaterial`](OutwardJobFreeIssueMaterial.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.OutwardJobFreeIssueMaterial payload = 4;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1573

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1566

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1582

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1580

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsFreeIssueMaterialsServicePaginationResponse"``

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1581

## Methods

### clone

▸ **clone**(): [`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md) \| `PlainMessage`\<[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1601

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1589

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1593

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsFreeIssueMaterialsServicePaginationResponse`](OutwardJobsFreeIssueMaterialsServicePaginationResponse.md)

#### Defined in

src/outward_jobs_free_issue_materials.scailo_pb.ts:1597

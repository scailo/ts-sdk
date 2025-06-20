[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceSearchAllReq

# Class: InwardJobsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.InwardJobsServiceSearchAllReq

## Hierarchy

- `Message`\<[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)\>

  ↳ **`InwardJobsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceSearchAllReq.md#constructor)

### Properties

- [buyerClientId](InwardJobsServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](InwardJobsServiceSearchAllReq.md#consigneeclientid)
- [count](InwardJobsServiceSearchAllReq.md#count)
- [entityUuid](InwardJobsServiceSearchAllReq.md#entityuuid)
- [isActive](InwardJobsServiceSearchAllReq.md#isactive)
- [locationId](InwardJobsServiceSearchAllReq.md#locationid)
- [offset](InwardJobsServiceSearchAllReq.md#offset)
- [projectId](InwardJobsServiceSearchAllReq.md#projectid)
- [searchKey](InwardJobsServiceSearchAllReq.md#searchkey)
- [sortKey](InwardJobsServiceSearchAllReq.md#sortkey)
- [sortOrder](InwardJobsServiceSearchAllReq.md#sortorder)
- [status](InwardJobsServiceSearchAllReq.md#status)
- [fields](InwardJobsServiceSearchAllReq.md#fields)
- [runtime](InwardJobsServiceSearchAllReq.md#runtime)
- [typeName](InwardJobsServiceSearchAllReq.md#typename)

### Methods

- [clone](InwardJobsServiceSearchAllReq.md#clone)
- [equals](InwardJobsServiceSearchAllReq.md#equals)
- [fromBinary](InwardJobsServiceSearchAllReq.md#frombinary)
- [fromJson](InwardJobsServiceSearchAllReq.md#fromjson)
- [fromJsonString](InwardJobsServiceSearchAllReq.md#fromjsonstring)
- [getType](InwardJobsServiceSearchAllReq.md#gettype)
- [toBinary](InwardJobsServiceSearchAllReq.md#tobinary)
- [toJSON](InwardJobsServiceSearchAllReq.md#tojson)
- [toJson](InwardJobsServiceSearchAllReq.md#tojson-1)
- [toJsonString](InwardJobsServiceSearchAllReq.md#tojsonstring)
- [equals](InwardJobsServiceSearchAllReq.md#equals-1)
- [fromBinary](InwardJobsServiceSearchAllReq.md#frombinary-1)
- [fromJson](InwardJobsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](InwardJobsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceSearchAllReq**(`data?`): [`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)\> |

#### Returns

[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

#### Overrides

Message\&lt;InwardJobsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/inward_jobs.scailo_pb.ts:2249

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

src/inward_jobs.scailo_pb.ts:2233

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The associated consignee client ID

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

src/inward_jobs.scailo_pb.ts:2226

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/inward_jobs.scailo_pb.ts:2177

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/inward_jobs.scailo_pb.ts:2205

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/inward_jobs.scailo_pb.ts:2170

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the associated location

**`Generated`**

from field: uint64 location_id = 24;

#### Defined in

src/inward_jobs.scailo_pb.ts:2240

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/inward_jobs.scailo_pb.ts:2184

___

### projectId

• **projectId**: `bigint` = `protoInt64.zero`

The ID of the associated project

**`Generated`**

from field: uint64 project_id = 25;

#### Defined in

src/inward_jobs.scailo_pb.ts:2247

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/inward_jobs.scailo_pb.ts:2219

___

### sortKey

• **sortKey**: [`INWARD_JOB_SORT_KEY`](../enums/INWARD_JOB_SORT_KEY.md) = `INWARD_JOB_SORT_KEY.INWARD_JOB_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INWARD_JOB_SORT_KEY sort_key = 5;

#### Defined in

src/inward_jobs.scailo_pb.ts:2198

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/inward_jobs.scailo_pb.ts:2191

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/inward_jobs.scailo_pb.ts:2212

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inward_jobs.scailo_pb.ts:2256

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inward_jobs.scailo_pb.ts:2254

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceSearchAllReq"``

#### Defined in

src/inward_jobs.scailo_pb.ts:2255

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md) \| `PlainMessage`\<[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md) \| `PlainMessage`\<[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md) \| `PlainMessage`\<[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inward_jobs.scailo_pb.ts:2283

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2271

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2275

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceSearchAllReq`](InwardJobsServiceSearchAllReq.md)

#### Defined in

src/inward_jobs.scailo_pb.ts:2279

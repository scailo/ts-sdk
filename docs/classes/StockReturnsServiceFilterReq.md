[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StockReturnsServiceFilterReq

# Class: StockReturnsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.StockReturnsServiceFilterReq

## Hierarchy

- `Message`\<[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)\>

  ↳ **`StockReturnsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StockReturnsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StockReturnsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StockReturnsServiceFilterReq.md#approvedonend)
- [approvedOnStart](StockReturnsServiceFilterReq.md#approvedonstart)
- [approverRoleId](StockReturnsServiceFilterReq.md#approverroleid)
- [completedOnEnd](StockReturnsServiceFilterReq.md#completedonend)
- [completedOnStart](StockReturnsServiceFilterReq.md#completedonstart)
- [count](StockReturnsServiceFilterReq.md#count)
- [creationTimestampEnd](StockReturnsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StockReturnsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StockReturnsServiceFilterReq.md#entityuuid)
- [familyId](StockReturnsServiceFilterReq.md#familyid)
- [finalRefNumber](StockReturnsServiceFilterReq.md#finalrefnumber)
- [isActive](StockReturnsServiceFilterReq.md#isactive)
- [locationId](StockReturnsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](StockReturnsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](StockReturnsServiceFilterReq.md#modificationtimestampstart)
- [offset](StockReturnsServiceFilterReq.md#offset)
- [refFrom](StockReturnsServiceFilterReq.md#reffrom)
- [refId](StockReturnsServiceFilterReq.md#refid)
- [referenceId](StockReturnsServiceFilterReq.md#referenceid)
- [sortKey](StockReturnsServiceFilterReq.md#sortkey)
- [sortOrder](StockReturnsServiceFilterReq.md#sortorder)
- [status](StockReturnsServiceFilterReq.md#status)
- [fields](StockReturnsServiceFilterReq.md#fields)
- [runtime](StockReturnsServiceFilterReq.md#runtime)
- [typeName](StockReturnsServiceFilterReq.md#typename)

### Methods

- [clone](StockReturnsServiceFilterReq.md#clone)
- [equals](StockReturnsServiceFilterReq.md#equals)
- [fromBinary](StockReturnsServiceFilterReq.md#frombinary)
- [fromJson](StockReturnsServiceFilterReq.md#fromjson)
- [fromJsonString](StockReturnsServiceFilterReq.md#fromjsonstring)
- [getType](StockReturnsServiceFilterReq.md#gettype)
- [toBinary](StockReturnsServiceFilterReq.md#tobinary)
- [toJSON](StockReturnsServiceFilterReq.md#tojson)
- [toJson](StockReturnsServiceFilterReq.md#tojson-1)
- [toJsonString](StockReturnsServiceFilterReq.md#tojsonstring)
- [equals](StockReturnsServiceFilterReq.md#equals-1)
- [fromBinary](StockReturnsServiceFilterReq.md#frombinary-1)
- [fromJson](StockReturnsServiceFilterReq.md#fromjson-1)
- [fromJsonString](StockReturnsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockReturnsServiceFilterReq**(`data?`): [`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)\> |

#### Returns

[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

#### Overrides

Message\&lt;StockReturnsServiceFilterReq\&gt;.constructor

#### Defined in

src/stock_returns.scailo_pb.ts:1358

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/stock_returns.scailo_pb.ts:1293

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/stock_returns.scailo_pb.ts:1286

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/stock_returns.scailo_pb.ts:1279

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/stock_returns.scailo_pb.ts:1300

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/stock_returns.scailo_pb.ts:1314

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/stock_returns.scailo_pb.ts:1307

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/stock_returns.scailo_pb.ts:1209

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/stock_returns.scailo_pb.ts:1244

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/stock_returns.scailo_pb.ts:1237

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/stock_returns.scailo_pb.ts:1265

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/stock_returns.scailo_pb.ts:1356

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/stock_returns.scailo_pb.ts:1328

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/stock_returns.scailo_pb.ts:1202

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/stock_returns.scailo_pb.ts:1349

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/stock_returns.scailo_pb.ts:1258

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/stock_returns.scailo_pb.ts:1251

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/stock_returns.scailo_pb.ts:1216

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/stock_returns.scailo_pb.ts:1335

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/stock_returns.scailo_pb.ts:1342

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock return

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/stock_returns.scailo_pb.ts:1321

___

### sortKey

• **sortKey**: [`STOCK_RETURN_SORT_KEY`](../enums/STOCK_RETURN_SORT_KEY.md) = `STOCK_RETURN_SORT_KEY.STOCK_RETURN_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STOCK_RETURN_SORT_KEY sort_key = 5;

#### Defined in

src/stock_returns.scailo_pb.ts:1230

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/stock_returns.scailo_pb.ts:1223

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this stock return

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/stock_returns.scailo_pb.ts:1272

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_returns.scailo_pb.ts:1365

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_returns.scailo_pb.ts:1363

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockReturnsServiceFilterReq"``

#### Defined in

src/stock_returns.scailo_pb.ts:1364

## Methods

### clone

▸ **clone**(): [`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md) \| `PlainMessage`\<[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md) \| `PlainMessage`\<[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md) \| `PlainMessage`\<[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_returns.scailo_pb.ts:1403

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

#### Defined in

src/stock_returns.scailo_pb.ts:1391

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

#### Defined in

src/stock_returns.scailo_pb.ts:1395

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockReturnsServiceFilterReq`](StockReturnsServiceFilterReq.md)

#### Defined in

src/stock_returns.scailo_pb.ts:1399

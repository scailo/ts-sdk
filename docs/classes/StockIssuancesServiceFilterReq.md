[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / StockIssuancesServiceFilterReq

# Class: StockIssuancesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.StockIssuancesServiceFilterReq

## Hierarchy

- `Message`\<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\>

  ↳ **`StockIssuancesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StockIssuancesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StockIssuancesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StockIssuancesServiceFilterReq.md#approvedonend)
- [approvedOnStart](StockIssuancesServiceFilterReq.md#approvedonstart)
- [approverRoleId](StockIssuancesServiceFilterReq.md#approverroleid)
- [completedOnEnd](StockIssuancesServiceFilterReq.md#completedonend)
- [completedOnStart](StockIssuancesServiceFilterReq.md#completedonstart)
- [count](StockIssuancesServiceFilterReq.md#count)
- [creationTimestampEnd](StockIssuancesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StockIssuancesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StockIssuancesServiceFilterReq.md#entityuuid)
- [familyId](StockIssuancesServiceFilterReq.md#familyid)
- [finalRefNumber](StockIssuancesServiceFilterReq.md#finalrefnumber)
- [isActive](StockIssuancesServiceFilterReq.md#isactive)
- [locationId](StockIssuancesServiceFilterReq.md#locationid)
- [modificationTimestampEnd](StockIssuancesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](StockIssuancesServiceFilterReq.md#modificationtimestampstart)
- [offset](StockIssuancesServiceFilterReq.md#offset)
- [refFrom](StockIssuancesServiceFilterReq.md#reffrom)
- [refId](StockIssuancesServiceFilterReq.md#refid)
- [referenceId](StockIssuancesServiceFilterReq.md#referenceid)
- [sortKey](StockIssuancesServiceFilterReq.md#sortkey)
- [sortOrder](StockIssuancesServiceFilterReq.md#sortorder)
- [status](StockIssuancesServiceFilterReq.md#status)
- [fields](StockIssuancesServiceFilterReq.md#fields)
- [runtime](StockIssuancesServiceFilterReq.md#runtime)
- [typeName](StockIssuancesServiceFilterReq.md#typename)

### Methods

- [clone](StockIssuancesServiceFilterReq.md#clone)
- [equals](StockIssuancesServiceFilterReq.md#equals)
- [fromBinary](StockIssuancesServiceFilterReq.md#frombinary)
- [fromJson](StockIssuancesServiceFilterReq.md#fromjson)
- [fromJsonString](StockIssuancesServiceFilterReq.md#fromjsonstring)
- [getType](StockIssuancesServiceFilterReq.md#gettype)
- [toBinary](StockIssuancesServiceFilterReq.md#tobinary)
- [toJSON](StockIssuancesServiceFilterReq.md#tojson)
- [toJson](StockIssuancesServiceFilterReq.md#tojson-1)
- [toJsonString](StockIssuancesServiceFilterReq.md#tojsonstring)
- [equals](StockIssuancesServiceFilterReq.md#equals-1)
- [fromBinary](StockIssuancesServiceFilterReq.md#frombinary-1)
- [fromJson](StockIssuancesServiceFilterReq.md#fromjson-1)
- [fromJsonString](StockIssuancesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockIssuancesServiceFilterReq**(`data?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Overrides

Message\&lt;StockIssuancesServiceFilterReq\&gt;.constructor

#### Defined in

src/stock_issuances.scailo_pb.ts:1427

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/stock_issuances.scailo_pb.ts:1362

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/stock_issuances.scailo_pb.ts:1355

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/stock_issuances.scailo_pb.ts:1348

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/stock_issuances.scailo_pb.ts:1369

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/stock_issuances.scailo_pb.ts:1383

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/stock_issuances.scailo_pb.ts:1376

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/stock_issuances.scailo_pb.ts:1278

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/stock_issuances.scailo_pb.ts:1313

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/stock_issuances.scailo_pb.ts:1306

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/stock_issuances.scailo_pb.ts:1334

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/stock_issuances.scailo_pb.ts:1425

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/stock_issuances.scailo_pb.ts:1397

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/stock_issuances.scailo_pb.ts:1271

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/stock_issuances.scailo_pb.ts:1418

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/stock_issuances.scailo_pb.ts:1327

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/stock_issuances.scailo_pb.ts:1320

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/stock_issuances.scailo_pb.ts:1285

___

### refFrom

• **refFrom**: [`STOCK_ISSUANCE_REF_FROM`](../enums/STOCK_ISSUANCE_REF_FROM.md) = `STOCK_ISSUANCE_REF_FROM.STOCK_ISSUANCE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.STOCK_ISSUANCE_REF_FROM ref_from = 22;

#### Defined in

src/stock_issuances.scailo_pb.ts:1404

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/stock_issuances.scailo_pb.ts:1411

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock issuance

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/stock_issuances.scailo_pb.ts:1390

___

### sortKey

• **sortKey**: [`STOCK_ISSUANCE_SORT_KEY`](../enums/STOCK_ISSUANCE_SORT_KEY.md) = `STOCK_ISSUANCE_SORT_KEY.STOCK_ISSUANCE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STOCK_ISSUANCE_SORT_KEY sort_key = 5;

#### Defined in

src/stock_issuances.scailo_pb.ts:1299

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/stock_issuances.scailo_pb.ts:1292

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this stock issuance

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/stock_issuances.scailo_pb.ts:1341

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_issuances.scailo_pb.ts:1434

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_issuances.scailo_pb.ts:1432

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockIssuancesServiceFilterReq"``

#### Defined in

src/stock_issuances.scailo_pb.ts:1433

## Methods

### clone

▸ **clone**(): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md) \| `PlainMessage`\<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md) \| `PlainMessage`\<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md) \| `PlainMessage`\<[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_issuances.scailo_pb.ts:1472

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1460

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1464

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockIssuancesServiceFilterReq`](StockIssuancesServiceFilterReq.md)

#### Defined in

src/stock_issuances.scailo_pb.ts:1468

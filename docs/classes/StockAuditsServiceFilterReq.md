[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / StockAuditsServiceFilterReq

# Class: StockAuditsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.StockAuditsServiceFilterReq

## Hierarchy

- `Message`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\>

  ↳ **`StockAuditsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](StockAuditsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](StockAuditsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](StockAuditsServiceFilterReq.md#approvedonend)
- [approvedOnStart](StockAuditsServiceFilterReq.md#approvedonstart)
- [approverRoleId](StockAuditsServiceFilterReq.md#approverroleid)
- [completedOnEnd](StockAuditsServiceFilterReq.md#completedonend)
- [completedOnStart](StockAuditsServiceFilterReq.md#completedonstart)
- [count](StockAuditsServiceFilterReq.md#count)
- [creationTimestampEnd](StockAuditsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](StockAuditsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](StockAuditsServiceFilterReq.md#entityuuid)
- [familyId](StockAuditsServiceFilterReq.md#familyid)
- [finalRefNumber](StockAuditsServiceFilterReq.md#finalrefnumber)
- [isActive](StockAuditsServiceFilterReq.md#isactive)
- [locationId](StockAuditsServiceFilterReq.md#locationid)
- [modificationTimestampEnd](StockAuditsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](StockAuditsServiceFilterReq.md#modificationtimestampstart)
- [offset](StockAuditsServiceFilterReq.md#offset)
- [referenceId](StockAuditsServiceFilterReq.md#referenceid)
- [sortKey](StockAuditsServiceFilterReq.md#sortkey)
- [sortOrder](StockAuditsServiceFilterReq.md#sortorder)
- [status](StockAuditsServiceFilterReq.md#status)
- [fields](StockAuditsServiceFilterReq.md#fields)
- [runtime](StockAuditsServiceFilterReq.md#runtime)
- [typeName](StockAuditsServiceFilterReq.md#typename)

### Methods

- [clone](StockAuditsServiceFilterReq.md#clone)
- [equals](StockAuditsServiceFilterReq.md#equals)
- [fromBinary](StockAuditsServiceFilterReq.md#frombinary)
- [fromJson](StockAuditsServiceFilterReq.md#fromjson)
- [fromJsonString](StockAuditsServiceFilterReq.md#fromjsonstring)
- [getType](StockAuditsServiceFilterReq.md#gettype)
- [toBinary](StockAuditsServiceFilterReq.md#tobinary)
- [toJSON](StockAuditsServiceFilterReq.md#tojson)
- [toJson](StockAuditsServiceFilterReq.md#tojson-1)
- [toJsonString](StockAuditsServiceFilterReq.md#tojsonstring)
- [equals](StockAuditsServiceFilterReq.md#equals-1)
- [fromBinary](StockAuditsServiceFilterReq.md#frombinary-1)
- [fromJson](StockAuditsServiceFilterReq.md#fromjson-1)
- [fromJsonString](StockAuditsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new StockAuditsServiceFilterReq**(`data?`): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\> |

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Overrides

Message\&lt;StockAuditsServiceFilterReq\&gt;.constructor

#### Defined in

src/stock_audits.scailo_pb.ts:1274

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

src/stock_audits.scailo_pb.ts:1223

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

src/stock_audits.scailo_pb.ts:1216

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

src/stock_audits.scailo_pb.ts:1209

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

src/stock_audits.scailo_pb.ts:1230

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

The end range of completed timestamp

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

src/stock_audits.scailo_pb.ts:1244

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

The start range of completed timestamp

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

src/stock_audits.scailo_pb.ts:1237

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/stock_audits.scailo_pb.ts:1139

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/stock_audits.scailo_pb.ts:1174

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/stock_audits.scailo_pb.ts:1167

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/stock_audits.scailo_pb.ts:1195

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 30;

#### Defined in

src/stock_audits.scailo_pb.ts:1272

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

The unique reference number that has been automatically generated

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

src/stock_audits.scailo_pb.ts:1258

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/stock_audits.scailo_pb.ts:1132

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 25;

#### Defined in

src/stock_audits.scailo_pb.ts:1265

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/stock_audits.scailo_pb.ts:1188

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/stock_audits.scailo_pb.ts:1181

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/stock_audits.scailo_pb.ts:1146

___

### referenceId

• **referenceId**: `string` = `""`

The reference ID of the stock audit

**`Generated`**

from field: string reference_id = 20;

#### Defined in

src/stock_audits.scailo_pb.ts:1251

___

### sortKey

• **sortKey**: [`STOCK_AUDIT_SORT_KEY`](../enums/STOCK_AUDIT_SORT_KEY.md) = `STOCK_AUDIT_SORT_KEY.STOCK_AUDIT_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.STOCK_AUDIT_SORT_KEY sort_key = 5;

#### Defined in

src/stock_audits.scailo_pb.ts:1160

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/stock_audits.scailo_pb.ts:1153

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this stock audit

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/stock_audits.scailo_pb.ts:1202

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/stock_audits.scailo_pb.ts:1281

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/stock_audits.scailo_pb.ts:1279

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.StockAuditsServiceFilterReq"``

#### Defined in

src/stock_audits.scailo_pb.ts:1280

## Methods

### clone

▸ **clone**(): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md) \| `PlainMessage`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md) \| `PlainMessage`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md) \| `PlainMessage`\<[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/stock_audits.scailo_pb.ts:1317

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1305

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1309

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`StockAuditsServiceFilterReq`](StockAuditsServiceFilterReq.md)

#### Defined in

src/stock_audits.scailo_pb.ts:1313

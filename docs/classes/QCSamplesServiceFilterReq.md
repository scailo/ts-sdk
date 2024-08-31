[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesServiceFilterReq

# Class: QCSamplesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.QCSamplesServiceFilterReq

## Hierarchy

- `Message`\<[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)\>

  ↳ **`QCSamplesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QCSamplesServiceFilterReq.md#constructor)

### Properties

- [buyerClientId](QCSamplesServiceFilterReq.md#buyerclientid)
- [count](QCSamplesServiceFilterReq.md#count)
- [creationTimestampEnd](QCSamplesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QCSamplesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QCSamplesServiceFilterReq.md#entityuuid)
- [familyId](QCSamplesServiceFilterReq.md#familyid)
- [familyType](QCSamplesServiceFilterReq.md#familytype)
- [finishedOnEnd](QCSamplesServiceFilterReq.md#finishedonend)
- [finishedOnStart](QCSamplesServiceFilterReq.md#finishedonstart)
- [goodsReceiptId](QCSamplesServiceFilterReq.md#goodsreceiptid)
- [inventoryItemUuid](QCSamplesServiceFilterReq.md#inventoryitemuuid)
- [inwardJobFreeIssueMaterialId](QCSamplesServiceFilterReq.md#inwardjobfreeissuematerialid)
- [isActive](QCSamplesServiceFilterReq.md#isactive)
- [locationId](QCSamplesServiceFilterReq.md#locationid)
- [modificationTimestampEnd](QCSamplesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QCSamplesServiceFilterReq.md#modificationtimestampstart)
- [offset](QCSamplesServiceFilterReq.md#offset)
- [productionPlanId](QCSamplesServiceFilterReq.md#productionplanid)
- [qcGroupId](QCSamplesServiceFilterReq.md#qcgroupid)
- [sortKey](QCSamplesServiceFilterReq.md#sortkey)
- [sortOrder](QCSamplesServiceFilterReq.md#sortorder)
- [status](QCSamplesServiceFilterReq.md#status)
- [vendorId](QCSamplesServiceFilterReq.md#vendorid)
- [fields](QCSamplesServiceFilterReq.md#fields)
- [runtime](QCSamplesServiceFilterReq.md#runtime)
- [typeName](QCSamplesServiceFilterReq.md#typename)

### Methods

- [clone](QCSamplesServiceFilterReq.md#clone)
- [equals](QCSamplesServiceFilterReq.md#equals)
- [fromBinary](QCSamplesServiceFilterReq.md#frombinary)
- [fromJson](QCSamplesServiceFilterReq.md#fromjson)
- [fromJsonString](QCSamplesServiceFilterReq.md#fromjsonstring)
- [getType](QCSamplesServiceFilterReq.md#gettype)
- [toBinary](QCSamplesServiceFilterReq.md#tobinary)
- [toJSON](QCSamplesServiceFilterReq.md#tojson)
- [toJson](QCSamplesServiceFilterReq.md#tojson-1)
- [toJsonString](QCSamplesServiceFilterReq.md#tojsonstring)
- [equals](QCSamplesServiceFilterReq.md#equals-1)
- [fromBinary](QCSamplesServiceFilterReq.md#frombinary-1)
- [fromJson](QCSamplesServiceFilterReq.md#fromjson-1)
- [fromJsonString](QCSamplesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesServiceFilterReq**(`data?`): [`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)\> |

#### Returns

[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

#### Overrides

Message\&lt;QCSamplesServiceFilterReq\&gt;.constructor

#### Defined in

src/qc_samples.scailo_pb.ts:1165

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

------------------------------------------------------------

**`Generated`**

from field: uint64 buyer_client_id = 70;

#### Defined in

src/qc_samples.scailo_pb.ts:1163

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/qc_samples.scailo_pb.ts:1011

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/qc_samples.scailo_pb.ts:1046

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/qc_samples.scailo_pb.ts:1039

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/qc_samples.scailo_pb.ts:1067

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 18;

#### Defined in

src/qc_samples.scailo_pb.ts:1102

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The associated family type

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 17;

#### Defined in

src/qc_samples.scailo_pb.ts:1095

___

### finishedOnEnd

• **finishedOnEnd**: `bigint` = `protoInt64.zero`

The end range of finished timestamp

**`Generated`**

from field: uint64 finished_on_end = 16;

#### Defined in

src/qc_samples.scailo_pb.ts:1088

___

### finishedOnStart

• **finishedOnStart**: `bigint` = `protoInt64.zero`

The start range of finished timestamp

**`Generated`**

from field: uint64 finished_on_start = 15;

#### Defined in

src/qc_samples.scailo_pb.ts:1081

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

The associated goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 51;

#### Defined in

src/qc_samples.scailo_pb.ts:1140

___

### inventoryItemUuid

• **inventoryItemUuid**: `string` = `""`

The UUID of the inventory item

**`Generated`**

from field: string inventory_item_uuid = 20;

#### Defined in

src/qc_samples.scailo_pb.ts:1116

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

The associated inward job free issue material ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 52;

#### Defined in

src/qc_samples.scailo_pb.ts:1147

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/qc_samples.scailo_pb.ts:1004

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 21;

#### Defined in

src/qc_samples.scailo_pb.ts:1123

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/qc_samples.scailo_pb.ts:1060

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/qc_samples.scailo_pb.ts:1053

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/qc_samples.scailo_pb.ts:1018

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

------------------------------------------------------------
Higher order filters
------------------------------------------------------------
The associated production plan ID

**`Generated`**

from field: uint64 production_plan_id = 50;

#### Defined in

src/qc_samples.scailo_pb.ts:1133

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

The ID of the qc group

**`Generated`**

from field: uint64 qc_group_id = 19;

#### Defined in

src/qc_samples.scailo_pb.ts:1109

___

### sortKey

• **sortKey**: [`QC_SAMPLE_SORT_KEY`](../enums/QC_SAMPLE_SORT_KEY.md) = `QC_SAMPLE_SORT_KEY.QC_SAMPLE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QC_SAMPLE_SORT_KEY sort_key = 5;

#### Defined in

src/qc_samples.scailo_pb.ts:1032

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/qc_samples.scailo_pb.ts:1025

___

### status

• **status**: [`QC_SAMPLE_LIFECYCLE`](../enums/QC_SAMPLE_LIFECYCLE.md) = `QC_SAMPLE_LIFECYCLE.QC_SAMPLE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this qc sample

**`Generated`**

from field: Scailo.QC_SAMPLE_LIFECYCLE status = 10;

#### Defined in

src/qc_samples.scailo_pb.ts:1074

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 55;

#### Defined in

src/qc_samples.scailo_pb.ts:1154

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/qc_samples.scailo_pb.ts:1172

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/qc_samples.scailo_pb.ts:1170

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServiceFilterReq"``

#### Defined in

src/qc_samples.scailo_pb.ts:1171

## Methods

### clone

▸ **clone**(): [`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md) \| `PlainMessage`\<[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md) \| `PlainMessage`\<[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md) \| `PlainMessage`\<[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/qc_samples.scailo_pb.ts:1210

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1198

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1202

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceFilterReq`](QCSamplesServiceFilterReq.md)

#### Defined in

src/qc_samples.scailo_pb.ts:1206

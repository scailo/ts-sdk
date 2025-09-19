[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCSamplesServiceCountReq

# Class: QCSamplesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.QCSamplesServiceCountReq

## Hierarchy

- `Message`\<[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)\>

  ↳ **`QCSamplesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](QCSamplesServiceCountReq.md#constructor)

### Properties

- [buyerClientId](QCSamplesServiceCountReq.md#buyerclientid)
- [creationTimestampEnd](QCSamplesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](QCSamplesServiceCountReq.md#creationtimestampstart)
- [entityUuid](QCSamplesServiceCountReq.md#entityuuid)
- [familyId](QCSamplesServiceCountReq.md#familyid)
- [familyType](QCSamplesServiceCountReq.md#familytype)
- [finishedOnEnd](QCSamplesServiceCountReq.md#finishedonend)
- [finishedOnStart](QCSamplesServiceCountReq.md#finishedonstart)
- [goodsReceiptId](QCSamplesServiceCountReq.md#goodsreceiptid)
- [inventoryItemUuid](QCSamplesServiceCountReq.md#inventoryitemuuid)
- [inwardJobFreeIssueMaterialId](QCSamplesServiceCountReq.md#inwardjobfreeissuematerialid)
- [isActive](QCSamplesServiceCountReq.md#isactive)
- [locationId](QCSamplesServiceCountReq.md#locationid)
- [modificationTimestampEnd](QCSamplesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](QCSamplesServiceCountReq.md#modificationtimestampstart)
- [productionPlanId](QCSamplesServiceCountReq.md#productionplanid)
- [qcGroupId](QCSamplesServiceCountReq.md#qcgroupid)
- [status](QCSamplesServiceCountReq.md#status)
- [vendorId](QCSamplesServiceCountReq.md#vendorid)
- [fields](QCSamplesServiceCountReq.md#fields)
- [runtime](QCSamplesServiceCountReq.md#runtime)
- [typeName](QCSamplesServiceCountReq.md#typename)

### Methods

- [clone](QCSamplesServiceCountReq.md#clone)
- [equals](QCSamplesServiceCountReq.md#equals)
- [fromBinary](QCSamplesServiceCountReq.md#frombinary)
- [fromJson](QCSamplesServiceCountReq.md#fromjson)
- [fromJsonString](QCSamplesServiceCountReq.md#fromjsonstring)
- [getType](QCSamplesServiceCountReq.md#gettype)
- [toBinary](QCSamplesServiceCountReq.md#tobinary)
- [toJSON](QCSamplesServiceCountReq.md#tojson)
- [toJson](QCSamplesServiceCountReq.md#tojson-1)
- [toJsonString](QCSamplesServiceCountReq.md#tojsonstring)
- [equals](QCSamplesServiceCountReq.md#equals-1)
- [fromBinary](QCSamplesServiceCountReq.md#frombinary-1)
- [fromJson](QCSamplesServiceCountReq.md#fromjson-1)
- [fromJsonString](QCSamplesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCSamplesServiceCountReq**(`data?`): [`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)\> |

#### Returns

[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

#### Overrides

Message\&lt;QCSamplesServiceCountReq\&gt;.constructor

#### Defined in

[src/qc_samples.scailo_pb.ts:1426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1426)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

------------------------------------------------------------

**`Generated`**

from field: uint64 buyer_client_id = 70;

#### Defined in

[src/qc_samples.scailo_pb.ts:1424](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1424)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/qc_samples.scailo_pb.ts:1307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1307)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/qc_samples.scailo_pb.ts:1300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1300)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/qc_samples.scailo_pb.ts:1328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1328)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 18;

#### Defined in

[src/qc_samples.scailo_pb.ts:1363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1363)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The associated family type

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 17;

#### Defined in

[src/qc_samples.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1356)

___

### finishedOnEnd

• **finishedOnEnd**: `bigint` = `protoInt64.zero`

The end range of finished timestamp

**`Generated`**

from field: uint64 finished_on_end = 16;

#### Defined in

[src/qc_samples.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1349)

___

### finishedOnStart

• **finishedOnStart**: `bigint` = `protoInt64.zero`

The start range of finished timestamp

**`Generated`**

from field: uint64 finished_on_start = 15;

#### Defined in

[src/qc_samples.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1342)

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

The associated goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 51;

#### Defined in

[src/qc_samples.scailo_pb.ts:1401](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1401)

___

### inventoryItemUuid

• **inventoryItemUuid**: `string` = `""`

The UUID of the inventory item

**`Generated`**

from field: string inventory_item_uuid = 20;

#### Defined in

[src/qc_samples.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1377)

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

The associated inward job free issue material ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 52;

#### Defined in

[src/qc_samples.scailo_pb.ts:1408](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1408)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/qc_samples.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1293)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 21;

#### Defined in

[src/qc_samples.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1384)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/qc_samples.scailo_pb.ts:1321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1321)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/qc_samples.scailo_pb.ts:1314](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1314)

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

[src/qc_samples.scailo_pb.ts:1394](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1394)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

The ID of the qc group

**`Generated`**

from field: uint64 qc_group_id = 19;

#### Defined in

[src/qc_samples.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1370)

___

### status

• **status**: [`QC_SAMPLE_LIFECYCLE`](../enums/QC_SAMPLE_LIFECYCLE.md) = `QC_SAMPLE_LIFECYCLE.QC_SAMPLE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this qc sample

**`Generated`**

from field: Scailo.QC_SAMPLE_LIFECYCLE status = 10;

#### Defined in

[src/qc_samples.scailo_pb.ts:1335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1335)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 55;

#### Defined in

[src/qc_samples.scailo_pb.ts:1415](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1415)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_samples.scailo_pb.ts:1433](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1433)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_samples.scailo_pb.ts:1431](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1431)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServiceCountReq"``

#### Defined in

[src/qc_samples.scailo_pb.ts:1432](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1432)

## Methods

### clone

▸ **clone**(): [`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

Create a deep copy.

#### Returns

[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md) \| `PlainMessage`\<[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md) \| `PlainMessage`\<[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)\> |
| `b` | `undefined` \| [`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md) \| `PlainMessage`\<[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_samples.scailo_pb.ts:1467](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1467)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:1455](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1455)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:1459](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1459)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCSamplesServiceCountReq`](QCSamplesServiceCountReq.md)

#### Defined in

[src/qc_samples.scailo_pb.ts:1463](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/qc_samples.scailo_pb.ts#L1463)

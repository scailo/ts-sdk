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

[src/qc_samples.scailo_pb.ts:1637](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1637)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

------------------------------------------------------------

**`Generated`**

from field: uint64 buyer_client_id = 70;

#### Defined in

[src/qc_samples.scailo_pb.ts:1635](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1635)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/qc_samples.scailo_pb.ts:1491](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1491)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/qc_samples.scailo_pb.ts:1475](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1475)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/qc_samples.scailo_pb.ts:1539](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1539)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The associated family ID

**`Generated`**

from field: uint64 family_id = 18;

#### Defined in

[src/qc_samples.scailo_pb.ts:1574](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1574)

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The associated family type

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 17;

#### Defined in

[src/qc_samples.scailo_pb.ts:1567](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1567)

___

### finishedOnEnd

• **finishedOnEnd**: `bigint` = `protoInt64.zero`

The end range of finished timestamp

**`Generated`**

from field: uint64 finished_on_end = 16;

#### Defined in

[src/qc_samples.scailo_pb.ts:1560](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1560)

___

### finishedOnStart

• **finishedOnStart**: `bigint` = `protoInt64.zero`

The start range of finished timestamp

**`Generated`**

from field: uint64 finished_on_start = 15;

#### Defined in

[src/qc_samples.scailo_pb.ts:1553](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1553)

___

### goodsReceiptId

• **goodsReceiptId**: `bigint` = `protoInt64.zero`

The associated goods receipt ID

**`Generated`**

from field: uint64 goods_receipt_id = 51;

#### Defined in

[src/qc_samples.scailo_pb.ts:1612](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1612)

___

### inventoryItemUuid

• **inventoryItemUuid**: `string` = `""`

The UUID of the inventory item

**`Generated`**

from field: string inventory_item_uuid = 20;

#### Defined in

[src/qc_samples.scailo_pb.ts:1588](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1588)

___

### inwardJobFreeIssueMaterialId

• **inwardJobFreeIssueMaterialId**: `bigint` = `protoInt64.zero`

The associated inward job free issue material ID

**`Generated`**

from field: uint64 inward_job_free_issue_material_id = 52;

#### Defined in

[src/qc_samples.scailo_pb.ts:1619](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1619)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/qc_samples.scailo_pb.ts:1459](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1459)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the record is created

**`Generated`**

from field: uint64 location_id = 21;

#### Defined in

[src/qc_samples.scailo_pb.ts:1595](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1595)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/qc_samples.scailo_pb.ts:1523](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1523)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/qc_samples.scailo_pb.ts:1507](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1507)

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

[src/qc_samples.scailo_pb.ts:1605](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1605)

___

### qcGroupId

• **qcGroupId**: `bigint` = `protoInt64.zero`

The ID of the qc group

**`Generated`**

from field: uint64 qc_group_id = 19;

#### Defined in

[src/qc_samples.scailo_pb.ts:1581](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1581)

___

### status

• **status**: [`QC_SAMPLE_LIFECYCLE`](../enums/QC_SAMPLE_LIFECYCLE.md) = `QC_SAMPLE_LIFECYCLE.QC_SAMPLE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this qc sample

**`Generated`**

from field: Scailo.QC_SAMPLE_LIFECYCLE status = 10;

#### Defined in

[src/qc_samples.scailo_pb.ts:1546](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1546)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The associated vendor ID

**`Generated`**

from field: uint64 vendor_id = 55;

#### Defined in

[src/qc_samples.scailo_pb.ts:1626](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1626)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_samples.scailo_pb.ts:1644](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1644)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_samples.scailo_pb.ts:1642](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1642)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCSamplesServiceCountReq"``

#### Defined in

[src/qc_samples.scailo_pb.ts:1643](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1643)

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

[src/qc_samples.scailo_pb.ts:1678](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1678)

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

[src/qc_samples.scailo_pb.ts:1666](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1666)

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

[src/qc_samples.scailo_pb.ts:1670](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1670)

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

[src/qc_samples.scailo_pb.ts:1674](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/qc_samples.scailo_pb.ts#L1674)

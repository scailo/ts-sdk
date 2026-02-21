[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServiceCountReq

# Class: ComponentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ComponentsServiceCountReq

## Hierarchy

- `Message`\<[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)\>

  ↳ **`ComponentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ComponentsServiceCountReq.md#constructor)

### Properties

- [code](ComponentsServiceCountReq.md#code)
- [creationTimestampEnd](ComponentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ComponentsServiceCountReq.md#creationtimestampstart)
- [discardedAtEnd](ComponentsServiceCountReq.md#discardedatend)
- [discardedAtStart](ComponentsServiceCountReq.md#discardedatstart)
- [entityUuid](ComponentsServiceCountReq.md#entityuuid)
- [familyId](ComponentsServiceCountReq.md#familyid)
- [formData](ComponentsServiceCountReq.md#formdata)
- [hash](ComponentsServiceCountReq.md#hash)
- [internalItemCode](ComponentsServiceCountReq.md#internalitemcode)
- [isActive](ComponentsServiceCountReq.md#isactive)
- [isQcReportPublic](ComponentsServiceCountReq.md#isqcreportpublic)
- [locationId](ComponentsServiceCountReq.md#locationid)
- [modificationTimestampEnd](ComponentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ComponentsServiceCountReq.md#modificationtimestampstart)
- [parentRefId](ComponentsServiceCountReq.md#parentrefid)
- [quantityRemainingMax](ComponentsServiceCountReq.md#quantityremainingmax)
- [quantityRemainingMin](ComponentsServiceCountReq.md#quantityremainingmin)
- [refFrom](ComponentsServiceCountReq.md#reffrom)
- [refId](ComponentsServiceCountReq.md#refid)
- [secondaryUomId](ComponentsServiceCountReq.md#secondaryuomid)
- [shelfLifeTimestampEnd](ComponentsServiceCountReq.md#shelflifetimestampend)
- [shelfLifeTimestampStart](ComponentsServiceCountReq.md#shelflifetimestampstart)
- [status](ComponentsServiceCountReq.md#status)
- [storageId](ComponentsServiceCountReq.md#storageid)
- [storeId](ComponentsServiceCountReq.md#storeid)
- [storeIntakeAtEnd](ComponentsServiceCountReq.md#storeintakeatend)
- [storeIntakeAtStart](ComponentsServiceCountReq.md#storeintakeatstart)
- [vendorId](ComponentsServiceCountReq.md#vendorid)
- [warrantyTimestampEnd](ComponentsServiceCountReq.md#warrantytimestampend)
- [warrantyTimestampStart](ComponentsServiceCountReq.md#warrantytimestampstart)
- [fields](ComponentsServiceCountReq.md#fields)
- [runtime](ComponentsServiceCountReq.md#runtime)
- [typeName](ComponentsServiceCountReq.md#typename)

### Methods

- [clone](ComponentsServiceCountReq.md#clone)
- [equals](ComponentsServiceCountReq.md#equals)
- [fromBinary](ComponentsServiceCountReq.md#frombinary)
- [fromJson](ComponentsServiceCountReq.md#fromjson)
- [fromJsonString](ComponentsServiceCountReq.md#fromjsonstring)
- [getType](ComponentsServiceCountReq.md#gettype)
- [toBinary](ComponentsServiceCountReq.md#tobinary)
- [toJSON](ComponentsServiceCountReq.md#tojson)
- [toJson](ComponentsServiceCountReq.md#tojson-1)
- [toJsonString](ComponentsServiceCountReq.md#tojsonstring)
- [equals](ComponentsServiceCountReq.md#equals-1)
- [fromBinary](ComponentsServiceCountReq.md#frombinary-1)
- [fromJson](ComponentsServiceCountReq.md#fromjson-1)
- [fromJsonString](ComponentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServiceCountReq**(`data?`): [`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)\> |

#### Returns

[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

#### Overrides

Message\&lt;ComponentsServiceCountReq\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1498)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the component

**`Generated`**

from field: string code = 34;

#### Defined in

[src/components.scailo_pb.ts:1389](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1389)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/components.scailo_pb.ts:1298](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1298)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/components.scailo_pb.ts:1291](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1291)

___

### discardedAtEnd

• **discardedAtEnd**: `bigint` = `protoInt64.zero`

The end range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_end = 23;

#### Defined in

[src/components.scailo_pb.ts:1354](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1354)

___

### discardedAtStart

• **discardedAtStart**: `bigint` = `protoInt64.zero`

The start range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_start = 22;

#### Defined in

[src/components.scailo_pb.ts:1347](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1347)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/components.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1319)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/components.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1382)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/components.scailo_pb.ts:1496](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1496)

___

### hash

• **hash**: `string` = `""`

The computed hash of the component

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/components.scailo_pb.ts:1403](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1403)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Filter by the exact internal code

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/components.scailo_pb.ts:1396](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1396)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/components.scailo_pb.ts:1284](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1284)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/components.scailo_pb.ts:1473](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1473)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/components.scailo_pb.ts:1480](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1480)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/components.scailo_pb.ts:1312](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1312)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/components.scailo_pb.ts:1305](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1305)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/components.scailo_pb.ts:1361](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1361)

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

[src/components.scailo_pb.ts:1417](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1417)

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

[src/components.scailo_pb.ts:1410](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1410)

___

### refFrom

• **refFrom**: [`COMPONENT_REF_FROM`](../enums/COMPONENT_REF_FROM.md) = `COMPONENT_REF_FROM.COMPONENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.COMPONENT_REF_FROM ref_from = 31;

#### Defined in

[src/components.scailo_pb.ts:1368](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1368)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/components.scailo_pb.ts:1375](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1375)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of component

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/components.scailo_pb.ts:1424](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1424)

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

[src/components.scailo_pb.ts:1438](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1438)

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

[src/components.scailo_pb.ts:1431](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1431)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this component

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/components.scailo_pb.ts:1326](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1326)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the component is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/components.scailo_pb.ts:1466](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1466)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the component is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/components.scailo_pb.ts:1459](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1459)

___

### storeIntakeAtEnd

• **storeIntakeAtEnd**: `bigint` = `protoInt64.zero`

The end range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_end = 21;

#### Defined in

[src/components.scailo_pb.ts:1340](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1340)

___

### storeIntakeAtStart

• **storeIntakeAtStart**: `bigint` = `protoInt64.zero`

The start range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_start = 20;

#### Defined in

[src/components.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1333)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Filter by the given vendor ID

--------------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 81;

#### Defined in

[src/components.scailo_pb.ts:1489](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1489)

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

[src/components.scailo_pb.ts:1452](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1452)

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

[src/components.scailo_pb.ts:1445](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1445)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:1505](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1505)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:1503](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1503)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServiceCountReq"``

#### Defined in

[src/components.scailo_pb.ts:1504](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1504)

## Methods

### clone

▸ **clone**(): [`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServiceCountReq`](ComponentsServiceCountReq.md) \| `PlainMessage`\<[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ComponentsServiceCountReq`](ComponentsServiceCountReq.md) \| `PlainMessage`\<[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ComponentsServiceCountReq`](ComponentsServiceCountReq.md) \| `PlainMessage`\<[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:1551](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1551)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

#### Defined in

[src/components.scailo_pb.ts:1539](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1539)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

#### Defined in

[src/components.scailo_pb.ts:1543](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1543)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceCountReq`](ComponentsServiceCountReq.md)

#### Defined in

[src/components.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/0ac219e78249ca0b2fbdf3c20ae003ce6b752959/src/components.scailo_pb.ts#L1547)

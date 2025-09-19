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

[src/components.scailo_pb.ts:1458](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1458)

## Properties

### code

• **code**: `string` = `""`

The auto generated code of the component

**`Generated`**

from field: string code = 34;

#### Defined in

[src/components.scailo_pb.ts:1356](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1356)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/components.scailo_pb.ts:1265](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1265)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/components.scailo_pb.ts:1258](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1258)

___

### discardedAtEnd

• **discardedAtEnd**: `bigint` = `protoInt64.zero`

The end range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_end = 23;

#### Defined in

[src/components.scailo_pb.ts:1321](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1321)

___

### discardedAtStart

• **discardedAtStart**: `bigint` = `protoInt64.zero`

The start range of discarded timestamp

**`Generated`**

from field: uint64 discarded_at_start = 22;

#### Defined in

[src/components.scailo_pb.ts:1314](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1314)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/components.scailo_pb.ts:1286](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1286)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/components.scailo_pb.ts:1349](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1349)

___

### hash

• **hash**: `string` = `""`

The computed hash of the component

**`Generated`**

from field: string hash = 36;

#### Defined in

[src/components.scailo_pb.ts:1370](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1370)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/components.scailo_pb.ts:1363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1363)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/components.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1251)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/components.scailo_pb.ts:1440](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1440)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/components.scailo_pb.ts:1447](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1447)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/components.scailo_pb.ts:1279](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1279)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/components.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1272)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/components.scailo_pb.ts:1328](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1328)

___

### quantityRemainingMax

• **quantityRemainingMax**: `bigint` = `protoInt64.zero`

The maximum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_max = 38;

#### Defined in

[src/components.scailo_pb.ts:1384](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1384)

___

### quantityRemainingMin

• **quantityRemainingMin**: `bigint` = `protoInt64.zero`

The minimum remaining quantity (in cents)

**`Generated`**

from field: uint64 quantity_remaining_min = 37;

#### Defined in

[src/components.scailo_pb.ts:1377](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1377)

___

### refFrom

• **refFrom**: [`COMPONENT_REF_FROM`](../enums/COMPONENT_REF_FROM.md) = `COMPONENT_REF_FROM.COMPONENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.COMPONENT_REF_FROM ref_from = 31;

#### Defined in

[src/components.scailo_pb.ts:1335](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1335)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/components.scailo_pb.ts:1342](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1342)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of component

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/components.scailo_pb.ts:1391](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1391)

___

### shelfLifeTimestampEnd

• **shelfLifeTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_end = 41;

#### Defined in

[src/components.scailo_pb.ts:1405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1405)

___

### shelfLifeTimestampStart

• **shelfLifeTimestampStart**: `bigint` = `protoInt64.zero`

The start range of shelf life timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp_start = 40;

#### Defined in

[src/components.scailo_pb.ts:1398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1398)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this component

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/components.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1293)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the component is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/components.scailo_pb.ts:1433](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1433)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the component is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/components.scailo_pb.ts:1426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1426)

___

### storeIntakeAtEnd

• **storeIntakeAtEnd**: `bigint` = `protoInt64.zero`

The end range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_end = 21;

#### Defined in

[src/components.scailo_pb.ts:1307](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1307)

___

### storeIntakeAtStart

• **storeIntakeAtStart**: `bigint` = `protoInt64.zero`

The start range of store intake timestamp

**`Generated`**

from field: uint64 store_intake_at_start = 20;

#### Defined in

[src/components.scailo_pb.ts:1300](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1300)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

Filter by the given vendor ID

--------------------------------------------------

**`Generated`**

from field: uint64 vendor_id = 81;

#### Defined in

[src/components.scailo_pb.ts:1456](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1456)

___

### warrantyTimestampEnd

• **warrantyTimestampEnd**: `bigint` = `protoInt64.zero`

The end range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_end = 43;

#### Defined in

[src/components.scailo_pb.ts:1419](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1419)

___

### warrantyTimestampStart

• **warrantyTimestampStart**: `bigint` = `protoInt64.zero`

The start range of the warranty timestamp

**`Generated`**

from field: uint64 warranty_timestamp_start = 42;

#### Defined in

[src/components.scailo_pb.ts:1412](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1412)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:1465](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1465)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:1463](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1463)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServiceCountReq"``

#### Defined in

[src/components.scailo_pb.ts:1464](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1464)

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

[src/components.scailo_pb.ts:1510](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1510)

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

[src/components.scailo_pb.ts:1498](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1498)

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

[src/components.scailo_pb.ts:1502](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1502)

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

[src/components.scailo_pb.ts:1506](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1506)

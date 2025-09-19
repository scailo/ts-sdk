[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServiceSearchAllReq

# Class: ComponentsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.ComponentsServiceSearchAllReq

## Hierarchy

- `Message`\<[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)\>

  ↳ **`ComponentsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](ComponentsServiceSearchAllReq.md#constructor)

### Properties

- [count](ComponentsServiceSearchAllReq.md#count)
- [entityUuid](ComponentsServiceSearchAllReq.md#entityuuid)
- [familyId](ComponentsServiceSearchAllReq.md#familyid)
- [isActive](ComponentsServiceSearchAllReq.md#isactive)
- [isQcReportPublic](ComponentsServiceSearchAllReq.md#isqcreportpublic)
- [locationId](ComponentsServiceSearchAllReq.md#locationid)
- [offset](ComponentsServiceSearchAllReq.md#offset)
- [parentRefId](ComponentsServiceSearchAllReq.md#parentrefid)
- [refFrom](ComponentsServiceSearchAllReq.md#reffrom)
- [refId](ComponentsServiceSearchAllReq.md#refid)
- [searchKey](ComponentsServiceSearchAllReq.md#searchkey)
- [secondaryUomId](ComponentsServiceSearchAllReq.md#secondaryuomid)
- [sortKey](ComponentsServiceSearchAllReq.md#sortkey)
- [sortOrder](ComponentsServiceSearchAllReq.md#sortorder)
- [status](ComponentsServiceSearchAllReq.md#status)
- [storageId](ComponentsServiceSearchAllReq.md#storageid)
- [storeId](ComponentsServiceSearchAllReq.md#storeid)
- [fields](ComponentsServiceSearchAllReq.md#fields)
- [runtime](ComponentsServiceSearchAllReq.md#runtime)
- [typeName](ComponentsServiceSearchAllReq.md#typename)

### Methods

- [clone](ComponentsServiceSearchAllReq.md#clone)
- [equals](ComponentsServiceSearchAllReq.md#equals)
- [fromBinary](ComponentsServiceSearchAllReq.md#frombinary)
- [fromJson](ComponentsServiceSearchAllReq.md#fromjson)
- [fromJsonString](ComponentsServiceSearchAllReq.md#fromjsonstring)
- [getType](ComponentsServiceSearchAllReq.md#gettype)
- [toBinary](ComponentsServiceSearchAllReq.md#tobinary)
- [toJSON](ComponentsServiceSearchAllReq.md#tojson)
- [toJson](ComponentsServiceSearchAllReq.md#tojson-1)
- [toJsonString](ComponentsServiceSearchAllReq.md#tojsonstring)
- [equals](ComponentsServiceSearchAllReq.md#equals-1)
- [fromBinary](ComponentsServiceSearchAllReq.md#frombinary-1)
- [fromJson](ComponentsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](ComponentsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServiceSearchAllReq**(`data?`): [`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)\> |

#### Returns

[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

#### Overrides

Message\&lt;ComponentsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:1641](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1641)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/components.scailo_pb.ts:1534](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1534)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/components.scailo_pb.ts:1562](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1562)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/components.scailo_pb.ts:1604](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1604)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/components.scailo_pb.ts:1527](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1527)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/components.scailo_pb.ts:1632](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1632)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/components.scailo_pb.ts:1639](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1639)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/components.scailo_pb.ts:1541](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1541)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/components.scailo_pb.ts:1583](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1583)

___

### refFrom

• **refFrom**: [`COMPONENT_REF_FROM`](../enums/COMPONENT_REF_FROM.md) = `COMPONENT_REF_FROM.COMPONENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.COMPONENT_REF_FROM ref_from = 31;

#### Defined in

[src/components.scailo_pb.ts:1590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1590)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/components.scailo_pb.ts:1597](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1597)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/components.scailo_pb.ts:1576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1576)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of component

**`Generated`**

from field: uint64 secondary_uom_id = 38;

#### Defined in

[src/components.scailo_pb.ts:1611](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1611)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/components.scailo_pb.ts:1555](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1555)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/components.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1548)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/components.scailo_pb.ts:1569](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1569)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the component is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/components.scailo_pb.ts:1625](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1625)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the component is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/components.scailo_pb.ts:1618](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1618)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:1648](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1648)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:1646](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1646)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServiceSearchAllReq"``

#### Defined in

[src/components.scailo_pb.ts:1647](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1647)

## Methods

### clone

▸ **clone**(): [`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md) \| `PlainMessage`\<[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1680)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

#### Defined in

[src/components.scailo_pb.ts:1668](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1668)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

#### Defined in

[src/components.scailo_pb.ts:1672](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1672)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServiceSearchAllReq`](ComponentsServiceSearchAllReq.md)

#### Defined in

[src/components.scailo_pb.ts:1676](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L1676)

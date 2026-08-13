[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MerchandisesServiceSearchAllReq

# Class: MerchandisesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.MerchandisesServiceSearchAllReq

## Hierarchy

- `Message`\<[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)\>

  ↳ **`MerchandisesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](MerchandisesServiceSearchAllReq.md#constructor)

### Properties

- [count](MerchandisesServiceSearchAllReq.md#count)
- [entityUuid](MerchandisesServiceSearchAllReq.md#entityuuid)
- [familyId](MerchandisesServiceSearchAllReq.md#familyid)
- [isActive](MerchandisesServiceSearchAllReq.md#isactive)
- [isQcReportPublic](MerchandisesServiceSearchAllReq.md#isqcreportpublic)
- [locationId](MerchandisesServiceSearchAllReq.md#locationid)
- [offset](MerchandisesServiceSearchAllReq.md#offset)
- [parentRefId](MerchandisesServiceSearchAllReq.md#parentrefid)
- [refFrom](MerchandisesServiceSearchAllReq.md#reffrom)
- [refId](MerchandisesServiceSearchAllReq.md#refid)
- [searchKey](MerchandisesServiceSearchAllReq.md#searchkey)
- [secondaryUomId](MerchandisesServiceSearchAllReq.md#secondaryuomid)
- [sortKey](MerchandisesServiceSearchAllReq.md#sortkey)
- [sortOrder](MerchandisesServiceSearchAllReq.md#sortorder)
- [status](MerchandisesServiceSearchAllReq.md#status)
- [storageId](MerchandisesServiceSearchAllReq.md#storageid)
- [storeId](MerchandisesServiceSearchAllReq.md#storeid)
- [fields](MerchandisesServiceSearchAllReq.md#fields)
- [runtime](MerchandisesServiceSearchAllReq.md#runtime)
- [typeName](MerchandisesServiceSearchAllReq.md#typename)

### Methods

- [clone](MerchandisesServiceSearchAllReq.md#clone)
- [equals](MerchandisesServiceSearchAllReq.md#equals)
- [fromBinary](MerchandisesServiceSearchAllReq.md#frombinary)
- [fromJson](MerchandisesServiceSearchAllReq.md#fromjson)
- [fromJsonString](MerchandisesServiceSearchAllReq.md#fromjsonstring)
- [getType](MerchandisesServiceSearchAllReq.md#gettype)
- [toBinary](MerchandisesServiceSearchAllReq.md#tobinary)
- [toJSON](MerchandisesServiceSearchAllReq.md#tojson)
- [toJson](MerchandisesServiceSearchAllReq.md#tojson-1)
- [toJsonString](MerchandisesServiceSearchAllReq.md#tojsonstring)
- [equals](MerchandisesServiceSearchAllReq.md#equals-1)
- [fromBinary](MerchandisesServiceSearchAllReq.md#frombinary-1)
- [fromJson](MerchandisesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](MerchandisesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MerchandisesServiceSearchAllReq**(`data?`): [`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)\> |

#### Returns

[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

#### Overrides

Message\&lt;MerchandisesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/merchandises.scailo_pb.ts:1995](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1995)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/merchandises.scailo_pb.ts:1853](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1853)

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

from field: string entity_uuid = 6;

#### Defined in

[src/merchandises.scailo_pb.ts:1907](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1907)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/merchandises.scailo_pb.ts:1958](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1958)

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

[src/merchandises.scailo_pb.ts:1837](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1837)

___

### isQcReportPublic

• **isQcReportPublic**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if the associated QC report should be public

**`Generated`**

from field: Scailo.BOOL_FILTER is_qc_report_public = 52;

#### Defined in

[src/merchandises.scailo_pb.ts:1986](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1986)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Filter by the location ID

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/merchandises.scailo_pb.ts:1993](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1993)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/merchandises.scailo_pb.ts:1869](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1869)

___

### parentRefId

• **parentRefId**: `bigint` = `protoInt64.zero`

The ID of the parent inventory item

**`Generated`**

from field: uint64 parent_ref_id = 30;

#### Defined in

[src/merchandises.scailo_pb.ts:1937](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1937)

___

### refFrom

• **refFrom**: [`MERCHANDISE_REF_FROM`](../enums/MERCHANDISE_REF_FROM.md) = `MERCHANDISE_REF_FROM.MERCHANDISE_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.MERCHANDISE_REF_FROM ref_from = 31;

#### Defined in

[src/merchandises.scailo_pb.ts:1944](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1944)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/merchandises.scailo_pb.ts:1951](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1951)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/merchandises.scailo_pb.ts:1930](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1930)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of merchandise

**`Generated`**

from field: uint64 secondary_uom_id = 38;

#### Defined in

[src/merchandises.scailo_pb.ts:1965](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1965)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/merchandises.scailo_pb.ts:1891](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1891)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/merchandises.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1881)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 10;

#### Defined in

[src/merchandises.scailo_pb.ts:1914](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1914)

___

### storageId

• **storageId**: `bigint` = `protoInt64.zero`

Stores an optional ID of the associated storage that the merchandise is stored in

**`Generated`**

from field: uint64 storage_id = 51;

#### Defined in

[src/merchandises.scailo_pb.ts:1979](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1979)

___

### storeId

• **storeId**: `bigint` = `protoInt64.zero`

Stores the store to which the merchandise is sent to

**`Generated`**

from field: uint64 store_id = 50;

#### Defined in

[src/merchandises.scailo_pb.ts:1972](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L1972)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/merchandises.scailo_pb.ts:2002](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L2002)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/merchandises.scailo_pb.ts:2000](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L2000)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MerchandisesServiceSearchAllReq"``

#### Defined in

[src/merchandises.scailo_pb.ts:2001](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L2001)

## Methods

### clone

▸ **clone**(): [`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md) \| `PlainMessage`\<[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md) \| `PlainMessage`\<[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md) \| `PlainMessage`\<[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/merchandises.scailo_pb.ts:2034](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L2034)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

#### Defined in

[src/merchandises.scailo_pb.ts:2022](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L2022)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

#### Defined in

[src/merchandises.scailo_pb.ts:2026](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L2026)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MerchandisesServiceSearchAllReq`](MerchandisesServiceSearchAllReq.md)

#### Defined in

[src/merchandises.scailo_pb.ts:2030](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/merchandises.scailo_pb.ts#L2030)

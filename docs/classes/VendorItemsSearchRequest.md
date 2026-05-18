[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorItemsSearchRequest

# Class: VendorItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.VendorItemsSearchRequest

## Hierarchy

- `Message`\<[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)\>

  ↳ **`VendorItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](VendorItemsSearchRequest.md#constructor)

### Properties

- [count](VendorItemsSearchRequest.md#count)
- [entityUuid](VendorItemsSearchRequest.md#entityuuid)
- [familyId](VendorItemsSearchRequest.md#familyid)
- [isActive](VendorItemsSearchRequest.md#isactive)
- [offset](VendorItemsSearchRequest.md#offset)
- [searchKey](VendorItemsSearchRequest.md#searchkey)
- [sortKey](VendorItemsSearchRequest.md#sortkey)
- [sortOrder](VendorItemsSearchRequest.md#sortorder)
- [status](VendorItemsSearchRequest.md#status)
- [taxGroupId](VendorItemsSearchRequest.md#taxgroupid)
- [uomId](VendorItemsSearchRequest.md#uomid)
- [vendorFamilyCode](VendorItemsSearchRequest.md#vendorfamilycode)
- [vendorId](VendorItemsSearchRequest.md#vendorid)
- [fields](VendorItemsSearchRequest.md#fields)
- [runtime](VendorItemsSearchRequest.md#runtime)
- [typeName](VendorItemsSearchRequest.md#typename)

### Methods

- [clone](VendorItemsSearchRequest.md#clone)
- [equals](VendorItemsSearchRequest.md#equals)
- [fromBinary](VendorItemsSearchRequest.md#frombinary)
- [fromJson](VendorItemsSearchRequest.md#fromjson)
- [fromJsonString](VendorItemsSearchRequest.md#fromjsonstring)
- [getType](VendorItemsSearchRequest.md#gettype)
- [toBinary](VendorItemsSearchRequest.md#tobinary)
- [toJSON](VendorItemsSearchRequest.md#tojson)
- [toJson](VendorItemsSearchRequest.md#tojson-1)
- [toJsonString](VendorItemsSearchRequest.md#tojsonstring)
- [equals](VendorItemsSearchRequest.md#equals-1)
- [fromBinary](VendorItemsSearchRequest.md#frombinary-1)
- [fromJson](VendorItemsSearchRequest.md#fromjson-1)
- [fromJsonString](VendorItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorItemsSearchRequest**(`data?`): [`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)\> |

#### Returns

[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

#### Overrides

Message\&lt;VendorItemsSearchRequest\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:2384](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2384)

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

[src/vendors.scailo_pb.ts:2279](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2279)

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

[src/vendors.scailo_pb.ts:2333](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2333)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/vendors.scailo_pb.ts:2354](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2354)

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

[src/vendors.scailo_pb.ts:2263](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2263)

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

[src/vendors.scailo_pb.ts:2295](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2295)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 20;

#### Defined in

[src/vendors.scailo_pb.ts:2382](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2382)

___

### sortKey

• **sortKey**: [`VENDOR_ITEM_SORT_KEY`](../enums/VENDOR_ITEM_SORT_KEY.md) = `VENDOR_ITEM_SORT_KEY.VENDOR_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.VENDOR_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/vendors.scailo_pb.ts:2317](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2317)

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

[src/vendors.scailo_pb.ts:2307](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2307)

___

### status

• **status**: [`VENDOR_ITEM_STATUS`](../enums/VENDOR_ITEM_STATUS.md) = `VENDOR_ITEM_STATUS.VENDOR_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.VENDOR_ITEM_STATUS status = 7;

#### Defined in

[src/vendors.scailo_pb.ts:2340](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2340)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 14;

#### Defined in

[src/vendors.scailo_pb.ts:2375](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2375)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

[src/vendors.scailo_pb.ts:2368](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2368)

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

The vendor's family code

**`Generated`**

from field: string vendor_family_code = 12;

#### Defined in

[src/vendors.scailo_pb.ts:2361](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2361)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 10;

#### Defined in

[src/vendors.scailo_pb.ts:2347](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2347)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:2391](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2391)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:2389](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2389)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorItemsSearchRequest"``

#### Defined in

[src/vendors.scailo_pb.ts:2390](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2390)

## Methods

### clone

▸ **clone**(): [`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorItemsSearchRequest`](VendorItemsSearchRequest.md) \| `PlainMessage`\<[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`VendorItemsSearchRequest`](VendorItemsSearchRequest.md) \| `PlainMessage`\<[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`VendorItemsSearchRequest`](VendorItemsSearchRequest.md) \| `PlainMessage`\<[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:2419](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2419)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:2407](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2407)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:2411](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2411)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorItemsSearchRequest`](VendorItemsSearchRequest.md)

#### Defined in

[src/vendors.scailo_pb.ts:2415](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/vendors.scailo_pb.ts#L2415)

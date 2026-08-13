[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorItemsSearchRequest

# Class: VendorItemsSearchRequest

Request payload structure used to search and filter Vendor Item records.
Supports pagination controls, tenancy isolation, status grouping, and text-based matching.

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

[src/vendors.scailo_pb.ts:3018](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3018)

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

[src/vendors.scailo_pb.ts:2854](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2854)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 6;

#### Defined in

[src/vendors.scailo_pb.ts:2908](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2908)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the target family to which the item belongs.

**`Example`**

```ts
582
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: optional uint64 family_id = 11;

#### Defined in

[src/vendors.scailo_pb.ts:2952](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2952)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/vendors.scailo_pb.ts:2838](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2838)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/vendors.scailo_pb.ts:2870](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2870)

___

### searchKey

• `Optional` **searchKey**: `string`

**`Optional`**

**`Description`**

Alphanumeric key phrase or keyword token used to perform lookup matches across searchable fields like item names.

**`Example`**

```ts
"Item A"
```

**`Regex`**

.*

**`Format`**

String value, can be empty.

**`Generated`**

from field: optional string search_key = 20;

#### Defined in

[src/vendors.scailo_pb.ts:3016](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3016)

___

### sortKey

• `Optional` **sortKey**: [`VENDOR_ITEM_SORT_KEY`](../enums/VENDOR_ITEM_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.VENDOR_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/vendors.scailo_pb.ts:2892](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2892)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/vendors.scailo_pb.ts:2882](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2882)

___

### status

• `Optional` **status**: [`VENDOR_ITEM_STATUS`](../enums/VENDOR_ITEM_STATUS.md)

**`Optional`**

**`Description`**

Filter records by their verification lifecycle state (e.g., Approved, Unapproved). Defaults to unspecified/any.

**`Example`**

```ts
VENDOR_ITEM_STATUS_APPROVED
```

**`Generated`**

from field: optional Scailo.VENDOR_ITEM_STATUS status = 7;

#### Defined in

[src/vendors.scailo_pb.ts:2920](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2920)

___

### taxGroupId

• `Optional` **taxGroupId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the target tax group applied to this item.

**`Example`**

```ts
4
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: optional uint64 tax_group_id = 14;

#### Defined in

[src/vendors.scailo_pb.ts:3000](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3000)

___

### uomId

• `Optional` **uomId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the target unit of material (UOM) associated with the item.

**`Example`**

```ts
12
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: optional uint64 uom_id = 13;

#### Defined in

[src/vendors.scailo_pb.ts:2984](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2984)

___

### vendorFamilyCode

• `Optional` **vendorFamilyCode**: `string`

**`Optional`**

**`Description`**

Stores the optional family code string as represented internally by the vendor.

**`Example`**

```ts
"VEND-FAM-XYZ-01"
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string vendor_family_code = 12;

#### Defined in

[src/vendors.scailo_pb.ts:2968](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2968)

___

### vendorId

• `Optional` **vendorId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the target vendor to which the item has been associated.

**`Example`**

```ts
1024
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer greater than zero.

**`Generated`**

from field: optional uint64 vendor_id = 10;

#### Defined in

[src/vendors.scailo_pb.ts:2936](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L2936)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:3025](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3025)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:3023](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3023)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorItemsSearchRequest"``

#### Defined in

[src/vendors.scailo_pb.ts:3024](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3024)

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

[src/vendors.scailo_pb.ts:3053](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3053)

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

[src/vendors.scailo_pb.ts:3041](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3041)

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

[src/vendors.scailo_pb.ts:3045](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3045)

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

[src/vendors.scailo_pb.ts:3049](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/vendors.scailo_pb.ts#L3049)

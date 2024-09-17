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

src/vendors.scailo_pb.ts:1829

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/vendors.scailo_pb.ts:1750

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/vendors.scailo_pb.ts:1778

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/vendors.scailo_pb.ts:1799

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/vendors.scailo_pb.ts:1743

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/vendors.scailo_pb.ts:1757

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 20;

#### Defined in

src/vendors.scailo_pb.ts:1827

___

### sortKey

• **sortKey**: [`VENDOR_ITEM_SORT_KEY`](../enums/VENDOR_ITEM_SORT_KEY.md) = `VENDOR_ITEM_SORT_KEY.VENDOR_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.VENDOR_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/vendors.scailo_pb.ts:1771

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/vendors.scailo_pb.ts:1764

___

### status

• **status**: [`VENDOR_ITEM_STATUS`](../enums/VENDOR_ITEM_STATUS.md) = `VENDOR_ITEM_STATUS.VENDOR_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.VENDOR_ITEM_STATUS status = 7;

#### Defined in

src/vendors.scailo_pb.ts:1785

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the tax group

**`Generated`**

from field: uint64 tax_group_id = 14;

#### Defined in

src/vendors.scailo_pb.ts:1820

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

The ID of the unit of material

**`Generated`**

from field: uint64 uom_id = 13;

#### Defined in

src/vendors.scailo_pb.ts:1813

___

### vendorFamilyCode

• **vendorFamilyCode**: `string` = `""`

The vendor's family code

**`Generated`**

from field: string vendor_family_code = 12;

#### Defined in

src/vendors.scailo_pb.ts:1806

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the vendor

**`Generated`**

from field: uint64 vendor_id = 10;

#### Defined in

src/vendors.scailo_pb.ts:1792

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/vendors.scailo_pb.ts:1836

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/vendors.scailo_pb.ts:1834

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorItemsSearchRequest"``

#### Defined in

src/vendors.scailo_pb.ts:1835

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

src/vendors.scailo_pb.ts:1864

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

src/vendors.scailo_pb.ts:1852

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

src/vendors.scailo_pb.ts:1856

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

src/vendors.scailo_pb.ts:1860

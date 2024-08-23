[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / TaxGroupsServiceSearchAllReq

# Class: TaxGroupsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.TaxGroupsServiceSearchAllReq

## Hierarchy

- `Message`\<[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)\>

  ↳ **`TaxGroupsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](TaxGroupsServiceSearchAllReq.md#constructor)

### Properties

- [category](TaxGroupsServiceSearchAllReq.md#category)
- [count](TaxGroupsServiceSearchAllReq.md#count)
- [entityUuid](TaxGroupsServiceSearchAllReq.md#entityuuid)
- [isActive](TaxGroupsServiceSearchAllReq.md#isactive)
- [offset](TaxGroupsServiceSearchAllReq.md#offset)
- [searchKey](TaxGroupsServiceSearchAllReq.md#searchkey)
- [sortKey](TaxGroupsServiceSearchAllReq.md#sortkey)
- [sortOrder](TaxGroupsServiceSearchAllReq.md#sortorder)
- [status](TaxGroupsServiceSearchAllReq.md#status)
- [fields](TaxGroupsServiceSearchAllReq.md#fields)
- [runtime](TaxGroupsServiceSearchAllReq.md#runtime)
- [typeName](TaxGroupsServiceSearchAllReq.md#typename)

### Methods

- [clone](TaxGroupsServiceSearchAllReq.md#clone)
- [equals](TaxGroupsServiceSearchAllReq.md#equals)
- [fromBinary](TaxGroupsServiceSearchAllReq.md#frombinary)
- [fromJson](TaxGroupsServiceSearchAllReq.md#fromjson)
- [fromJsonString](TaxGroupsServiceSearchAllReq.md#fromjsonstring)
- [getType](TaxGroupsServiceSearchAllReq.md#gettype)
- [toBinary](TaxGroupsServiceSearchAllReq.md#tobinary)
- [toJSON](TaxGroupsServiceSearchAllReq.md#tojson)
- [toJson](TaxGroupsServiceSearchAllReq.md#tojson-1)
- [toJsonString](TaxGroupsServiceSearchAllReq.md#tojsonstring)
- [equals](TaxGroupsServiceSearchAllReq.md#equals-1)
- [fromBinary](TaxGroupsServiceSearchAllReq.md#frombinary-1)
- [fromJson](TaxGroupsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](TaxGroupsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TaxGroupsServiceSearchAllReq**(`data?`): [`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)\> |

#### Returns

[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

#### Overrides

Message\&lt;TaxGroupsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/tax_groups.scailo_pb.ts:959

## Properties

### category

• **category**: [`TAX_GROUP_CATEGORY`](../enums/TAX_GROUP_CATEGORY.md) = `TAX_GROUP_CATEGORY.TAX_GROUP_CATEGORY_ANY_UNSPECIFIED`

The category of the tax group

**`Generated`**

from field: Scailo.TAX_GROUP_CATEGORY category = 32;

#### Defined in

src/tax_groups.scailo_pb.ts:957

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/tax_groups.scailo_pb.ts:908

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/tax_groups.scailo_pb.ts:936

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/tax_groups.scailo_pb.ts:901

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/tax_groups.scailo_pb.ts:915

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/tax_groups.scailo_pb.ts:950

___

### sortKey

• **sortKey**: [`TAX_GROUP_SORT_KEY`](../enums/TAX_GROUP_SORT_KEY.md) = `TAX_GROUP_SORT_KEY.TAX_GROUP_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.TAX_GROUP_SORT_KEY sort_key = 5;

#### Defined in

src/tax_groups.scailo_pb.ts:929

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/tax_groups.scailo_pb.ts:922

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/tax_groups.scailo_pb.ts:943

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/tax_groups.scailo_pb.ts:966

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/tax_groups.scailo_pb.ts:964

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TaxGroupsServiceSearchAllReq"``

#### Defined in

src/tax_groups.scailo_pb.ts:965

## Methods

### clone

▸ **clone**(): [`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md) \| `PlainMessage`\<[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/tax_groups.scailo_pb.ts:990

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:978

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:982

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TaxGroupsServiceSearchAllReq`](TaxGroupsServiceSearchAllReq.md)

#### Defined in

src/tax_groups.scailo_pb.ts:986

[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationSalesBundleItemsSearchRequest

# Class: EquationSalesBundleItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.EquationSalesBundleItemsSearchRequest

## Hierarchy

- `Message`\<[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)\>

  ↳ **`EquationSalesBundleItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](EquationSalesBundleItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](EquationSalesBundleItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](EquationSalesBundleItemsSearchRequest.md#approvedonend)
- [approvedOnStart](EquationSalesBundleItemsSearchRequest.md#approvedonstart)
- [approverRoleId](EquationSalesBundleItemsSearchRequest.md#approverroleid)
- [count](EquationSalesBundleItemsSearchRequest.md#count)
- [entityUuid](EquationSalesBundleItemsSearchRequest.md#entityuuid)
- [equationId](EquationSalesBundleItemsSearchRequest.md#equationid)
- [familyId](EquationSalesBundleItemsSearchRequest.md#familyid)
- [isActive](EquationSalesBundleItemsSearchRequest.md#isactive)
- [offset](EquationSalesBundleItemsSearchRequest.md#offset)
- [searchKey](EquationSalesBundleItemsSearchRequest.md#searchkey)
- [sortKey](EquationSalesBundleItemsSearchRequest.md#sortkey)
- [sortOrder](EquationSalesBundleItemsSearchRequest.md#sortorder)
- [status](EquationSalesBundleItemsSearchRequest.md#status)
- [fields](EquationSalesBundleItemsSearchRequest.md#fields)
- [runtime](EquationSalesBundleItemsSearchRequest.md#runtime)
- [typeName](EquationSalesBundleItemsSearchRequest.md#typename)

### Methods

- [clone](EquationSalesBundleItemsSearchRequest.md#clone)
- [equals](EquationSalesBundleItemsSearchRequest.md#equals)
- [fromBinary](EquationSalesBundleItemsSearchRequest.md#frombinary)
- [fromJson](EquationSalesBundleItemsSearchRequest.md#fromjson)
- [fromJsonString](EquationSalesBundleItemsSearchRequest.md#fromjsonstring)
- [getType](EquationSalesBundleItemsSearchRequest.md#gettype)
- [toBinary](EquationSalesBundleItemsSearchRequest.md#tobinary)
- [toJSON](EquationSalesBundleItemsSearchRequest.md#tojson)
- [toJson](EquationSalesBundleItemsSearchRequest.md#tojson-1)
- [toJsonString](EquationSalesBundleItemsSearchRequest.md#tojsonstring)
- [equals](EquationSalesBundleItemsSearchRequest.md#equals-1)
- [fromBinary](EquationSalesBundleItemsSearchRequest.md#frombinary-1)
- [fromJson](EquationSalesBundleItemsSearchRequest.md#fromjson-1)
- [fromJsonString](EquationSalesBundleItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationSalesBundleItemsSearchRequest**(`data?`): [`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)\> |

#### Returns

[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

#### Overrides

Message\&lt;EquationSalesBundleItemsSearchRequest\&gt;.constructor

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1014

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:984

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:977

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:970

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:991

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:928

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:956

___

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

The ID of the equation sales bundle

**`Generated`**

from field: uint64 equation_id = 20;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:998

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1005

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:921

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:935

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1012

___

### sortKey

• **sortKey**: [`EQUATION_SALES_BUNDLE_ITEM_SORT_KEY`](../enums/EQUATION_SALES_BUNDLE_ITEM_SORT_KEY.md) = `EQUATION_SALES_BUNDLE_ITEM_SORT_KEY.EQUATION_SALES_BUNDLE_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.EQUATION_SALES_BUNDLE_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:949

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:942

___

### status

• **status**: [`EQUATION_SALES_BUNDLE_ITEM_STATUS`](../enums/EQUATION_SALES_BUNDLE_ITEM_STATUS.md) = `EQUATION_SALES_BUNDLE_ITEM_STATUS.EQUATION_SALES_BUNDLE_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.EQUATION_SALES_BUNDLE_ITEM_STATUS status = 7;

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:963

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1021

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1019

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationSalesBundleItemsSearchRequest"``

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1020

## Methods

### clone

▸ **clone**(): [`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md) \| `PlainMessage`\<[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md) \| `PlainMessage`\<[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md) \| `PlainMessage`\<[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1050

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1038

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1042

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationSalesBundleItemsSearchRequest`](EquationSalesBundleItemsSearchRequest.md)

#### Defined in

src/equations_sales_bundles.scailo_pb.ts:1046

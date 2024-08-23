[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionPlanItemsSearchRequest

# Class: ProductionPlanItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.ProductionPlanItemsSearchRequest

## Hierarchy

- `Message`\<[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)\>

  ↳ **`ProductionPlanItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](ProductionPlanItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](ProductionPlanItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](ProductionPlanItemsSearchRequest.md#approvedonend)
- [approvedOnStart](ProductionPlanItemsSearchRequest.md#approvedonstart)
- [approverRoleId](ProductionPlanItemsSearchRequest.md#approverroleid)
- [count](ProductionPlanItemsSearchRequest.md#count)
- [entityUuid](ProductionPlanItemsSearchRequest.md#entityuuid)
- [familyId](ProductionPlanItemsSearchRequest.md#familyid)
- [familyType](ProductionPlanItemsSearchRequest.md#familytype)
- [isActive](ProductionPlanItemsSearchRequest.md#isactive)
- [offset](ProductionPlanItemsSearchRequest.md#offset)
- [productionPlanId](ProductionPlanItemsSearchRequest.md#productionplanid)
- [searchKey](ProductionPlanItemsSearchRequest.md#searchkey)
- [sortKey](ProductionPlanItemsSearchRequest.md#sortkey)
- [sortOrder](ProductionPlanItemsSearchRequest.md#sortorder)
- [status](ProductionPlanItemsSearchRequest.md#status)
- [fields](ProductionPlanItemsSearchRequest.md#fields)
- [runtime](ProductionPlanItemsSearchRequest.md#runtime)
- [typeName](ProductionPlanItemsSearchRequest.md#typename)

### Methods

- [clone](ProductionPlanItemsSearchRequest.md#clone)
- [equals](ProductionPlanItemsSearchRequest.md#equals)
- [fromBinary](ProductionPlanItemsSearchRequest.md#frombinary)
- [fromJson](ProductionPlanItemsSearchRequest.md#fromjson)
- [fromJsonString](ProductionPlanItemsSearchRequest.md#fromjsonstring)
- [getType](ProductionPlanItemsSearchRequest.md#gettype)
- [toBinary](ProductionPlanItemsSearchRequest.md#tobinary)
- [toJSON](ProductionPlanItemsSearchRequest.md#tojson)
- [toJson](ProductionPlanItemsSearchRequest.md#tojson-1)
- [toJsonString](ProductionPlanItemsSearchRequest.md#tojsonstring)
- [equals](ProductionPlanItemsSearchRequest.md#equals-1)
- [fromBinary](ProductionPlanItemsSearchRequest.md#frombinary-1)
- [fromJson](ProductionPlanItemsSearchRequest.md#fromjson-1)
- [fromJsonString](ProductionPlanItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionPlanItemsSearchRequest**(`data?`): [`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)\> |

#### Returns

[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

#### Overrides

Message\&lt;ProductionPlanItemsSearchRequest\&gt;.constructor

#### Defined in

src/production_plans.scailo_pb.ts:2063

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/production_plans.scailo_pb.ts:2026

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/production_plans.scailo_pb.ts:2019

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/production_plans.scailo_pb.ts:2012

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/production_plans.scailo_pb.ts:2033

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/production_plans.scailo_pb.ts:1970

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/production_plans.scailo_pb.ts:1998

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/production_plans.scailo_pb.ts:2047

___

### familyType

• **familyType**: [`FAMILY_TYPE`](../enums/FAMILY_TYPE.md) = `FAMILY_TYPE.FAMILY_TYPE_ANY_UNSPECIFIED`

The type of the family

**`Generated`**

from field: Scailo.FAMILY_TYPE family_type = 30;

#### Defined in

src/production_plans.scailo_pb.ts:2054

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/production_plans.scailo_pb.ts:1963

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/production_plans.scailo_pb.ts:1977

___

### productionPlanId

• **productionPlanId**: `bigint` = `protoInt64.zero`

The ID of the production plan

**`Generated`**

from field: uint64 production_plan_id = 20;

#### Defined in

src/production_plans.scailo_pb.ts:2040

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/production_plans.scailo_pb.ts:2061

___

### sortKey

• **sortKey**: [`PRODUCTION_PLAN_ITEM_SORT_KEY`](../enums/PRODUCTION_PLAN_ITEM_SORT_KEY.md) = `PRODUCTION_PLAN_ITEM_SORT_KEY.PRODUCTION_PLAN_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/production_plans.scailo_pb.ts:1991

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/production_plans.scailo_pb.ts:1984

___

### status

• **status**: [`PRODUCTION_PLAN_ITEM_STATUS`](../enums/PRODUCTION_PLAN_ITEM_STATUS.md) = `PRODUCTION_PLAN_ITEM_STATUS.PRODUCTION_PLAN_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.PRODUCTION_PLAN_ITEM_STATUS status = 7;

#### Defined in

src/production_plans.scailo_pb.ts:2005

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/production_plans.scailo_pb.ts:2070

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/production_plans.scailo_pb.ts:2068

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionPlanItemsSearchRequest"``

#### Defined in

src/production_plans.scailo_pb.ts:2069

## Methods

### clone

▸ **clone**(): [`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md) \| `PlainMessage`\<[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md) \| `PlainMessage`\<[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md) \| `PlainMessage`\<[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/production_plans.scailo_pb.ts:2100

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:2088

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:2092

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionPlanItemsSearchRequest`](ProductionPlanItemsSearchRequest.md)

#### Defined in

src/production_plans.scailo_pb.ts:2096

[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationWorkOrderItemsSearchRequest

# Class: EquationWorkOrderItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.EquationWorkOrderItemsSearchRequest

## Hierarchy

- `Message`\<[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)\>

  ↳ **`EquationWorkOrderItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](EquationWorkOrderItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](EquationWorkOrderItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](EquationWorkOrderItemsSearchRequest.md#approvedonend)
- [approvedOnStart](EquationWorkOrderItemsSearchRequest.md#approvedonstart)
- [approverRoleId](EquationWorkOrderItemsSearchRequest.md#approverroleid)
- [count](EquationWorkOrderItemsSearchRequest.md#count)
- [entityUuid](EquationWorkOrderItemsSearchRequest.md#entityuuid)
- [equationId](EquationWorkOrderItemsSearchRequest.md#equationid)
- [familyId](EquationWorkOrderItemsSearchRequest.md#familyid)
- [isActive](EquationWorkOrderItemsSearchRequest.md#isactive)
- [offset](EquationWorkOrderItemsSearchRequest.md#offset)
- [searchKey](EquationWorkOrderItemsSearchRequest.md#searchkey)
- [sortKey](EquationWorkOrderItemsSearchRequest.md#sortkey)
- [sortOrder](EquationWorkOrderItemsSearchRequest.md#sortorder)
- [status](EquationWorkOrderItemsSearchRequest.md#status)
- [fields](EquationWorkOrderItemsSearchRequest.md#fields)
- [runtime](EquationWorkOrderItemsSearchRequest.md#runtime)
- [typeName](EquationWorkOrderItemsSearchRequest.md#typename)

### Methods

- [clone](EquationWorkOrderItemsSearchRequest.md#clone)
- [equals](EquationWorkOrderItemsSearchRequest.md#equals)
- [fromBinary](EquationWorkOrderItemsSearchRequest.md#frombinary)
- [fromJson](EquationWorkOrderItemsSearchRequest.md#fromjson)
- [fromJsonString](EquationWorkOrderItemsSearchRequest.md#fromjsonstring)
- [getType](EquationWorkOrderItemsSearchRequest.md#gettype)
- [toBinary](EquationWorkOrderItemsSearchRequest.md#tobinary)
- [toJSON](EquationWorkOrderItemsSearchRequest.md#tojson)
- [toJson](EquationWorkOrderItemsSearchRequest.md#tojson-1)
- [toJsonString](EquationWorkOrderItemsSearchRequest.md#tojsonstring)
- [equals](EquationWorkOrderItemsSearchRequest.md#equals-1)
- [fromBinary](EquationWorkOrderItemsSearchRequest.md#frombinary-1)
- [fromJson](EquationWorkOrderItemsSearchRequest.md#fromjson-1)
- [fromJsonString](EquationWorkOrderItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationWorkOrderItemsSearchRequest**(`data?`): [`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)\> |

#### Returns

[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

#### Overrides

Message\&lt;EquationWorkOrderItemsSearchRequest\&gt;.constructor

#### Defined in

src/equations_work_orders.scailo_pb.ts:1030

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/equations_work_orders.scailo_pb.ts:1000

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/equations_work_orders.scailo_pb.ts:993

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/equations_work_orders.scailo_pb.ts:986

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/equations_work_orders.scailo_pb.ts:1007

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/equations_work_orders.scailo_pb.ts:944

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/equations_work_orders.scailo_pb.ts:972

___

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

The ID of the equation work order

**`Generated`**

from field: uint64 equation_id = 20;

#### Defined in

src/equations_work_orders.scailo_pb.ts:1014

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/equations_work_orders.scailo_pb.ts:1021

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/equations_work_orders.scailo_pb.ts:937

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/equations_work_orders.scailo_pb.ts:951

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/equations_work_orders.scailo_pb.ts:1028

___

### sortKey

• **sortKey**: [`EQUATION_WORK_ORDER_ITEM_SORT_KEY`](../enums/EQUATION_WORK_ORDER_ITEM_SORT_KEY.md) = `EQUATION_WORK_ORDER_ITEM_SORT_KEY.EQUATION_WORK_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.EQUATION_WORK_ORDER_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/equations_work_orders.scailo_pb.ts:965

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/equations_work_orders.scailo_pb.ts:958

___

### status

• **status**: [`EQUATION_WORK_ORDER_ITEM_STATUS`](../enums/EQUATION_WORK_ORDER_ITEM_STATUS.md) = `EQUATION_WORK_ORDER_ITEM_STATUS.EQUATION_WORK_ORDER_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.EQUATION_WORK_ORDER_ITEM_STATUS status = 7;

#### Defined in

src/equations_work_orders.scailo_pb.ts:979

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/equations_work_orders.scailo_pb.ts:1037

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/equations_work_orders.scailo_pb.ts:1035

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationWorkOrderItemsSearchRequest"``

#### Defined in

src/equations_work_orders.scailo_pb.ts:1036

## Methods

### clone

▸ **clone**(): [`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md) \| `PlainMessage`\<[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md) \| `PlainMessage`\<[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md) \| `PlainMessage`\<[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/equations_work_orders.scailo_pb.ts:1066

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

#### Defined in

src/equations_work_orders.scailo_pb.ts:1054

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

#### Defined in

src/equations_work_orders.scailo_pb.ts:1058

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationWorkOrderItemsSearchRequest`](EquationWorkOrderItemsSearchRequest.md)

#### Defined in

src/equations_work_orders.scailo_pb.ts:1062

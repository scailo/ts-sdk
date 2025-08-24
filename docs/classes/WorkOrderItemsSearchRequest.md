[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrderItemsSearchRequest

# Class: WorkOrderItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.WorkOrderItemsSearchRequest

## Hierarchy

- `Message`\<[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)\>

  ↳ **`WorkOrderItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrderItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](WorkOrderItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](WorkOrderItemsSearchRequest.md#approvedonend)
- [approvedOnStart](WorkOrderItemsSearchRequest.md#approvedonstart)
- [approverRoleId](WorkOrderItemsSearchRequest.md#approverroleid)
- [count](WorkOrderItemsSearchRequest.md#count)
- [deliveryDateEnd](WorkOrderItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](WorkOrderItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](WorkOrderItemsSearchRequest.md#deliverydatestart)
- [entityUuid](WorkOrderItemsSearchRequest.md#entityuuid)
- [familyId](WorkOrderItemsSearchRequest.md#familyid)
- [isActive](WorkOrderItemsSearchRequest.md#isactive)
- [offset](WorkOrderItemsSearchRequest.md#offset)
- [searchKey](WorkOrderItemsSearchRequest.md#searchkey)
- [sortKey](WorkOrderItemsSearchRequest.md#sortkey)
- [sortOrder](WorkOrderItemsSearchRequest.md#sortorder)
- [status](WorkOrderItemsSearchRequest.md#status)
- [workOrderId](WorkOrderItemsSearchRequest.md#workorderid)
- [fields](WorkOrderItemsSearchRequest.md#fields)
- [runtime](WorkOrderItemsSearchRequest.md#runtime)
- [typeName](WorkOrderItemsSearchRequest.md#typename)

### Methods

- [clone](WorkOrderItemsSearchRequest.md#clone)
- [equals](WorkOrderItemsSearchRequest.md#equals)
- [fromBinary](WorkOrderItemsSearchRequest.md#frombinary)
- [fromJson](WorkOrderItemsSearchRequest.md#fromjson)
- [fromJsonString](WorkOrderItemsSearchRequest.md#fromjsonstring)
- [getType](WorkOrderItemsSearchRequest.md#gettype)
- [toBinary](WorkOrderItemsSearchRequest.md#tobinary)
- [toJSON](WorkOrderItemsSearchRequest.md#tojson)
- [toJson](WorkOrderItemsSearchRequest.md#tojson-1)
- [toJsonString](WorkOrderItemsSearchRequest.md#tojsonstring)
- [equals](WorkOrderItemsSearchRequest.md#equals-1)
- [fromBinary](WorkOrderItemsSearchRequest.md#frombinary-1)
- [fromJson](WorkOrderItemsSearchRequest.md#fromjson-1)
- [fromJsonString](WorkOrderItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrderItemsSearchRequest**(`data?`): [`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)\> |

#### Returns

[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

#### Overrides

Message\&lt;WorkOrderItemsSearchRequest\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:2058

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

src/work_orders.scailo_pb.ts:2007

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

src/work_orders.scailo_pb.ts:2000

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

src/work_orders.scailo_pb.ts:1993

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

src/work_orders.scailo_pb.ts:2014

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/work_orders.scailo_pb.ts:1951

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the work order

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

src/work_orders.scailo_pb.ts:2049

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the work order

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

src/work_orders.scailo_pb.ts:2035

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the work order

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

src/work_orders.scailo_pb.ts:2042

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/work_orders.scailo_pb.ts:1979

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

src/work_orders.scailo_pb.ts:2028

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/work_orders.scailo_pb.ts:1944

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/work_orders.scailo_pb.ts:1958

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

src/work_orders.scailo_pb.ts:2056

___

### sortKey

• **sortKey**: [`WORK_ORDER_ITEM_SORT_KEY`](../enums/WORK_ORDER_ITEM_SORT_KEY.md) = `WORK_ORDER_ITEM_SORT_KEY.WORK_ORDER_ITEM_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.WORK_ORDER_ITEM_SORT_KEY sort_key = 5;

#### Defined in

src/work_orders.scailo_pb.ts:1972

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/work_orders.scailo_pb.ts:1965

___

### status

• **status**: [`WORK_ORDER_ITEM_STATUS`](../enums/WORK_ORDER_ITEM_STATUS.md) = `WORK_ORDER_ITEM_STATUS.WORK_ORDER_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.WORK_ORDER_ITEM_STATUS status = 7;

#### Defined in

src/work_orders.scailo_pb.ts:1986

___

### workOrderId

• **workOrderId**: `bigint` = `protoInt64.zero`

The ID of the work order

**`Generated`**

from field: uint64 work_order_id = 20;

#### Defined in

src/work_orders.scailo_pb.ts:2021

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:2065

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:2063

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrderItemsSearchRequest"``

#### Defined in

src/work_orders.scailo_pb.ts:2064

## Methods

### clone

▸ **clone**(): [`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md) \| `PlainMessage`\<[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md) \| `PlainMessage`\<[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md) \| `PlainMessage`\<[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:2097

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:2085

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:2089

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrderItemsSearchRequest`](WorkOrderItemsSearchRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:2093

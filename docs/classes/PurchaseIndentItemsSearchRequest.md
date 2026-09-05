[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchaseIndentItemsSearchRequest

# Class: PurchaseIndentItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.PurchaseIndentItemsSearchRequest

## Hierarchy

- `Message`\<[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)\>

  ↳ **`PurchaseIndentItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](PurchaseIndentItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](PurchaseIndentItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](PurchaseIndentItemsSearchRequest.md#approvedonend)
- [approvedOnStart](PurchaseIndentItemsSearchRequest.md#approvedonstart)
- [approverRoleId](PurchaseIndentItemsSearchRequest.md#approverroleid)
- [count](PurchaseIndentItemsSearchRequest.md#count)
- [deliveryDateEnd](PurchaseIndentItemsSearchRequest.md#deliverydateend)
- [deliveryDateExact](PurchaseIndentItemsSearchRequest.md#deliverydateexact)
- [deliveryDateStart](PurchaseIndentItemsSearchRequest.md#deliverydatestart)
- [entityUuid](PurchaseIndentItemsSearchRequest.md#entityuuid)
- [familyId](PurchaseIndentItemsSearchRequest.md#familyid)
- [isActive](PurchaseIndentItemsSearchRequest.md#isactive)
- [offset](PurchaseIndentItemsSearchRequest.md#offset)
- [purchaseIndentId](PurchaseIndentItemsSearchRequest.md#purchaseindentid)
- [searchKey](PurchaseIndentItemsSearchRequest.md#searchkey)
- [sortKey](PurchaseIndentItemsSearchRequest.md#sortkey)
- [sortOrder](PurchaseIndentItemsSearchRequest.md#sortorder)
- [status](PurchaseIndentItemsSearchRequest.md#status)
- [fields](PurchaseIndentItemsSearchRequest.md#fields)
- [runtime](PurchaseIndentItemsSearchRequest.md#runtime)
- [typeName](PurchaseIndentItemsSearchRequest.md#typename)

### Methods

- [clone](PurchaseIndentItemsSearchRequest.md#clone)
- [equals](PurchaseIndentItemsSearchRequest.md#equals)
- [fromBinary](PurchaseIndentItemsSearchRequest.md#frombinary)
- [fromJson](PurchaseIndentItemsSearchRequest.md#fromjson)
- [fromJsonString](PurchaseIndentItemsSearchRequest.md#fromjsonstring)
- [getType](PurchaseIndentItemsSearchRequest.md#gettype)
- [toBinary](PurchaseIndentItemsSearchRequest.md#tobinary)
- [toJSON](PurchaseIndentItemsSearchRequest.md#tojson)
- [toJson](PurchaseIndentItemsSearchRequest.md#tojson-1)
- [toJsonString](PurchaseIndentItemsSearchRequest.md#tojsonstring)
- [equals](PurchaseIndentItemsSearchRequest.md#equals-1)
- [fromBinary](PurchaseIndentItemsSearchRequest.md#frombinary-1)
- [fromJson](PurchaseIndentItemsSearchRequest.md#fromjson-1)
- [fromJsonString](PurchaseIndentItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchaseIndentItemsSearchRequest**(`data?`): [`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)\> |

#### Returns

[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

#### Overrides

Message\&lt;PurchaseIndentItemsSearchRequest\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:2617](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2617)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2566](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2566)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2559](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2559)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2552](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2552)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2573](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2573)

___

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

[src/purchases_indents.scailo_pb.ts:2484](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2484)

___

### deliveryDateEnd

• **deliveryDateEnd**: `string` = `""`

The end delivery date of the item in the purchase indent

**`Generated`**

from field: string delivery_date_end = 30;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2608](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2608)

___

### deliveryDateExact

• **deliveryDateExact**: `string` = `""`

The exact delivery date of the item in the purchase indent

**`Generated`**

from field: string delivery_date_exact = 28;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2594](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2594)

___

### deliveryDateStart

• **deliveryDateStart**: `string` = `""`

The start delivery date of the item in the purchase indent

**`Generated`**

from field: string delivery_date_start = 29;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2601](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2601)

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

[src/purchases_indents.scailo_pb.ts:2538](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2538)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2587](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2587)

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

[src/purchases_indents.scailo_pb.ts:2468](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2468)

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

[src/purchases_indents.scailo_pb.ts:2500](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2500)

___

### purchaseIndentId

• **purchaseIndentId**: `bigint` = `protoInt64.zero`

The ID of the purchase indent

**`Generated`**

from field: uint64 purchase_indent_id = 20;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2580](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2580)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2615](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2615)

___

### sortKey

• **sortKey**: [`PURCHASE_INDENT_ITEM_SORT_KEY`](../enums/PURCHASE_INDENT_ITEM_SORT_KEY.md) = `PURCHASE_INDENT_ITEM_SORT_KEY.PURCHASE_INDENT_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PURCHASE_INDENT_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2522](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2522)

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

[src/purchases_indents.scailo_pb.ts:2512](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2512)

___

### status

• **status**: [`PURCHASE_INDENT_ITEM_STATUS`](../enums/PURCHASE_INDENT_ITEM_STATUS.md) = `PURCHASE_INDENT_ITEM_STATUS.PURCHASE_INDENT_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.PURCHASE_INDENT_ITEM_STATUS status = 7;

#### Defined in

[src/purchases_indents.scailo_pb.ts:2545](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2545)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2624](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2624)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2622](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2622)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchaseIndentItemsSearchRequest"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:2623](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2623)

## Methods

### clone

▸ **clone**(): [`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md) \| `PlainMessage`\<[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:2656](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2656)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2644](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2644)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2648](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2648)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchaseIndentItemsSearchRequest`](PurchaseIndentItemsSearchRequest.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:2652](https://github.com/scailo/ts-sdk/blob/f37a917056fa07ad1e724eb2186f44b6118185e2/src/purchases_indents.scailo_pb.ts#L2652)

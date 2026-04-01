[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesReturnsServiceSearchAllReq

# Class: PurchasesReturnsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.PurchasesReturnsServiceSearchAllReq

## Hierarchy

- `Message`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\>

  ↳ **`PurchasesReturnsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PurchasesReturnsServiceSearchAllReq.md#constructor)

### Properties

- [billingStatus](PurchasesReturnsServiceSearchAllReq.md#billingstatus)
- [count](PurchasesReturnsServiceSearchAllReq.md#count)
- [entityUuid](PurchasesReturnsServiceSearchAllReq.md#entityuuid)
- [isActive](PurchasesReturnsServiceSearchAllReq.md#isactive)
- [offset](PurchasesReturnsServiceSearchAllReq.md#offset)
- [refFrom](PurchasesReturnsServiceSearchAllReq.md#reffrom)
- [refId](PurchasesReturnsServiceSearchAllReq.md#refid)
- [searchKey](PurchasesReturnsServiceSearchAllReq.md#searchkey)
- [sortKey](PurchasesReturnsServiceSearchAllReq.md#sortkey)
- [sortOrder](PurchasesReturnsServiceSearchAllReq.md#sortorder)
- [status](PurchasesReturnsServiceSearchAllReq.md#status)
- [vendorId](PurchasesReturnsServiceSearchAllReq.md#vendorid)
- [fields](PurchasesReturnsServiceSearchAllReq.md#fields)
- [runtime](PurchasesReturnsServiceSearchAllReq.md#runtime)
- [typeName](PurchasesReturnsServiceSearchAllReq.md#typename)

### Methods

- [clone](PurchasesReturnsServiceSearchAllReq.md#clone)
- [equals](PurchasesReturnsServiceSearchAllReq.md#equals)
- [fromBinary](PurchasesReturnsServiceSearchAllReq.md#frombinary)
- [fromJson](PurchasesReturnsServiceSearchAllReq.md#fromjson)
- [fromJsonString](PurchasesReturnsServiceSearchAllReq.md#fromjsonstring)
- [getType](PurchasesReturnsServiceSearchAllReq.md#gettype)
- [toBinary](PurchasesReturnsServiceSearchAllReq.md#tobinary)
- [toJSON](PurchasesReturnsServiceSearchAllReq.md#tojson)
- [toJson](PurchasesReturnsServiceSearchAllReq.md#tojson-1)
- [toJsonString](PurchasesReturnsServiceSearchAllReq.md#tojsonstring)
- [equals](PurchasesReturnsServiceSearchAllReq.md#equals-1)
- [fromBinary](PurchasesReturnsServiceSearchAllReq.md#frombinary-1)
- [fromJson](PurchasesReturnsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PurchasesReturnsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesReturnsServiceSearchAllReq**(`data?`): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\> |

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Overrides

Message\&lt;PurchasesReturnsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/purchases_returns.scailo_pb.ts:2629](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2629)

## Properties

### billingStatus

• **billingStatus**: [`PURCHASE_RETURN_BILLING_STATUS`](../enums/PURCHASE_RETURN_BILLING_STATUS.md) = `PURCHASE_RETURN_BILLING_STATUS.PURCHASE_RETURN_BILLING_STATUS_ANY_UNSPECIFIED`

The status of the purchase return bill

**`Generated`**

from field: Scailo.PURCHASE_RETURN_BILLING_STATUS billing_status = 40;

#### Defined in

[src/purchases_returns.scailo_pb.ts:2620](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2620)

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

[src/purchases_returns.scailo_pb.ts:2517](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2517)

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

[src/purchases_returns.scailo_pb.ts:2571](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2571)

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

[src/purchases_returns.scailo_pb.ts:2501](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2501)

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

[src/purchases_returns.scailo_pb.ts:2533](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2533)

___

### refFrom

• **refFrom**: [`PURCHASE_RETURN_REF_FROM`](../enums/PURCHASE_RETURN_REF_FROM.md) = `PURCHASE_RETURN_REF_FROM.PURCHASE_RETURN_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.PURCHASE_RETURN_REF_FROM ref_from = 22;

#### Defined in

[src/purchases_returns.scailo_pb.ts:2606](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2606)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/purchases_returns.scailo_pb.ts:2613](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2613)

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

[src/purchases_returns.scailo_pb.ts:2599](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2599)

___

### sortKey

• **sortKey**: [`PURCHASE_RETURN_SORT_KEY`](../enums/PURCHASE_RETURN_SORT_KEY.md) = `PURCHASE_RETURN_SORT_KEY.PURCHASE_RETURN_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PURCHASE_RETURN_SORT_KEY sort_key = 5;

#### Defined in

[src/purchases_returns.scailo_pb.ts:2555](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2555)

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

[src/purchases_returns.scailo_pb.ts:2545](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2545)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/purchases_returns.scailo_pb.ts:2583](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2583)

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 50;

#### Defined in

[src/purchases_returns.scailo_pb.ts:2627](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2627)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_returns.scailo_pb.ts:2636](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2636)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_returns.scailo_pb.ts:2634](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2634)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesReturnsServiceSearchAllReq"``

#### Defined in

[src/purchases_returns.scailo_pb.ts:2635](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2635)

## Methods

### clone

▸ **clone**(): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md) \| `PlainMessage`\<[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_returns.scailo_pb.ts:2663](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2663)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:2651](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2651)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:2655](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2655)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesReturnsServiceSearchAllReq`](PurchasesReturnsServiceSearchAllReq.md)

#### Defined in

[src/purchases_returns.scailo_pb.ts:2659](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/purchases_returns.scailo_pb.ts#L2659)

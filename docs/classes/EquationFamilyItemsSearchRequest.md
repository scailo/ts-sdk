[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationFamilyItemsSearchRequest

# Class: EquationFamilyItemsSearchRequest

Describes the request payload to retrieve approved or unapproved items.

**`Generated`**

from message Scailo.EquationFamilyItemsSearchRequest

## Hierarchy

- `Message`\<[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)\>

  ↳ **`EquationFamilyItemsSearchRequest`**

## Table of contents

### Constructors

- [constructor](EquationFamilyItemsSearchRequest.md#constructor)

### Properties

- [approvedByUserId](EquationFamilyItemsSearchRequest.md#approvedbyuserid)
- [approvedOnEnd](EquationFamilyItemsSearchRequest.md#approvedonend)
- [approvedOnStart](EquationFamilyItemsSearchRequest.md#approvedonstart)
- [approverRoleId](EquationFamilyItemsSearchRequest.md#approverroleid)
- [count](EquationFamilyItemsSearchRequest.md#count)
- [entityUuid](EquationFamilyItemsSearchRequest.md#entityuuid)
- [equationId](EquationFamilyItemsSearchRequest.md#equationid)
- [familyId](EquationFamilyItemsSearchRequest.md#familyid)
- [isActive](EquationFamilyItemsSearchRequest.md#isactive)
- [offset](EquationFamilyItemsSearchRequest.md#offset)
- [searchKey](EquationFamilyItemsSearchRequest.md#searchkey)
- [sortKey](EquationFamilyItemsSearchRequest.md#sortkey)
- [sortOrder](EquationFamilyItemsSearchRequest.md#sortorder)
- [status](EquationFamilyItemsSearchRequest.md#status)
- [fields](EquationFamilyItemsSearchRequest.md#fields)
- [runtime](EquationFamilyItemsSearchRequest.md#runtime)
- [typeName](EquationFamilyItemsSearchRequest.md#typename)

### Methods

- [clone](EquationFamilyItemsSearchRequest.md#clone)
- [equals](EquationFamilyItemsSearchRequest.md#equals)
- [fromBinary](EquationFamilyItemsSearchRequest.md#frombinary)
- [fromJson](EquationFamilyItemsSearchRequest.md#fromjson)
- [fromJsonString](EquationFamilyItemsSearchRequest.md#fromjsonstring)
- [getType](EquationFamilyItemsSearchRequest.md#gettype)
- [toBinary](EquationFamilyItemsSearchRequest.md#tobinary)
- [toJSON](EquationFamilyItemsSearchRequest.md#tojson)
- [toJson](EquationFamilyItemsSearchRequest.md#tojson-1)
- [toJsonString](EquationFamilyItemsSearchRequest.md#tojsonstring)
- [equals](EquationFamilyItemsSearchRequest.md#equals-1)
- [fromBinary](EquationFamilyItemsSearchRequest.md#frombinary-1)
- [fromJson](EquationFamilyItemsSearchRequest.md#fromjson-1)
- [fromJsonString](EquationFamilyItemsSearchRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationFamilyItemsSearchRequest**(`data?`): [`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)\> |

#### Returns

[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

#### Overrides

Message\&lt;EquationFamilyItemsSearchRequest\&gt;.constructor

#### Defined in

[src/equations_families.scailo_pb.ts:1105](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1105)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

The ID of the approver

**`Generated`**

from field: uint64 approved_by_user_id = 12;

#### Defined in

[src/equations_families.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1075)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

The end range of approved timestamp

**`Generated`**

from field: uint64 approved_on_end = 11;

#### Defined in

[src/equations_families.scailo_pb.ts:1068](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1068)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

The start range of approved timestamp

**`Generated`**

from field: uint64 approved_on_start = 10;

#### Defined in

[src/equations_families.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1061)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

The role ID of the approver

**`Generated`**

from field: uint64 approver_role_id = 13;

#### Defined in

[src/equations_families.scailo_pb.ts:1082](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1082)

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

[src/equations_families.scailo_pb.ts:993](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L993)

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

[src/equations_families.scailo_pb.ts:1047](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1047)

___

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

The ID of the equation family

**`Generated`**

from field: uint64 equation_id = 20;

#### Defined in

[src/equations_families.scailo_pb.ts:1089](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1089)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 21;

#### Defined in

[src/equations_families.scailo_pb.ts:1096](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1096)

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

[src/equations_families.scailo_pb.ts:977](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L977)

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

[src/equations_families.scailo_pb.ts:1009](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1009)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 40;

#### Defined in

[src/equations_families.scailo_pb.ts:1103](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1103)

___

### sortKey

• **sortKey**: [`EQUATION_FAMILY_ITEM_SORT_KEY`](../enums/EQUATION_FAMILY_ITEM_SORT_KEY.md) = `EQUATION_FAMILY_ITEM_SORT_KEY.EQUATION_FAMILY_ITEM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.EQUATION_FAMILY_ITEM_SORT_KEY sort_key = 5;

#### Defined in

[src/equations_families.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1031)

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

[src/equations_families.scailo_pb.ts:1021](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1021)

___

### status

• **status**: [`EQUATION_FAMILY_ITEM_STATUS`](../enums/EQUATION_FAMILY_ITEM_STATUS.md) = `EQUATION_FAMILY_ITEM_STATUS.EQUATION_FAMILY_ITEM_STATUS_ANY_UNSPECIFIED`

The status of the items

**`Generated`**

from field: Scailo.EQUATION_FAMILY_ITEM_STATUS status = 7;

#### Defined in

[src/equations_families.scailo_pb.ts:1054](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1054)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_families.scailo_pb.ts:1112](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1112)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_families.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1110)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationFamilyItemsSearchRequest"``

#### Defined in

[src/equations_families.scailo_pb.ts:1111](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1111)

## Methods

### clone

▸ **clone**(): [`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

Create a deep copy.

#### Returns

[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md) \| `PlainMessage`\<[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)\>

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
| `a` | `undefined` \| [`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md) \| `PlainMessage`\<[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)\> |
| `b` | `undefined` \| [`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md) \| `PlainMessage`\<[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_families.scailo_pb.ts:1141](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1141)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1129](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1129)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1133](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1133)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationFamilyItemsSearchRequest`](EquationFamilyItemsSearchRequest.md)

#### Defined in

[src/equations_families.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/equations_families.scailo_pb.ts#L1137)

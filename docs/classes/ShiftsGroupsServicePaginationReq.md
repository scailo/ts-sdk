[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServicePaginationReq

# Class: ShiftsGroupsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ShiftsGroupsServicePaginationReq

## Hierarchy

- `Message`\<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\>

  ↳ **`ShiftsGroupsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServicePaginationReq.md#constructor)

### Properties

- [count](ShiftsGroupsServicePaginationReq.md#count)
- [isActive](ShiftsGroupsServicePaginationReq.md#isactive)
- [offset](ShiftsGroupsServicePaginationReq.md#offset)
- [sortKey](ShiftsGroupsServicePaginationReq.md#sortkey)
- [sortOrder](ShiftsGroupsServicePaginationReq.md#sortorder)
- [status](ShiftsGroupsServicePaginationReq.md#status)
- [fields](ShiftsGroupsServicePaginationReq.md#fields)
- [runtime](ShiftsGroupsServicePaginationReq.md#runtime)
- [typeName](ShiftsGroupsServicePaginationReq.md#typename)

### Methods

- [clone](ShiftsGroupsServicePaginationReq.md#clone)
- [equals](ShiftsGroupsServicePaginationReq.md#equals)
- [fromBinary](ShiftsGroupsServicePaginationReq.md#frombinary)
- [fromJson](ShiftsGroupsServicePaginationReq.md#fromjson)
- [fromJsonString](ShiftsGroupsServicePaginationReq.md#fromjsonstring)
- [getType](ShiftsGroupsServicePaginationReq.md#gettype)
- [toBinary](ShiftsGroupsServicePaginationReq.md#tobinary)
- [toJSON](ShiftsGroupsServicePaginationReq.md#tojson)
- [toJson](ShiftsGroupsServicePaginationReq.md#tojson-1)
- [toJsonString](ShiftsGroupsServicePaginationReq.md#tojsonstring)
- [equals](ShiftsGroupsServicePaginationReq.md#equals-1)
- [fromBinary](ShiftsGroupsServicePaginationReq.md#frombinary-1)
- [fromJson](ShiftsGroupsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServicePaginationReq**(`data?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Overrides

Message\&lt;ShiftsGroupsServicePaginationReq\&gt;.constructor

#### Defined in

[src/shifts_groups.scailo_pb.ts:872](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L872)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/shifts_groups.scailo_pb.ts:825](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L825)

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

[src/shifts_groups.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L809)

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

[src/shifts_groups.scailo_pb.ts:841](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L841)

___

### sortKey

• **sortKey**: [`SHIFT_GROUP_SORT_KEY`](../enums/SHIFT_GROUP_SORT_KEY.md) = `SHIFT_GROUP_SORT_KEY.SHIFT_GROUP_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.SHIFT_GROUP_SORT_KEY sort_key = 5;

#### Defined in

[src/shifts_groups.scailo_pb.ts:863](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L863)

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

[src/shifts_groups.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L853)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this shift group

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/shifts_groups.scailo_pb.ts:870](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L870)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups.scailo_pb.ts:879](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L879)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L877)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsServicePaginationReq"``

#### Defined in

[src/shifts_groups.scailo_pb.ts:878](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L878)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md) \| `PlainMessage`\<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md) \| `PlainMessage`\<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md) \| `PlainMessage`\<[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L900)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:888](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L888)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L892)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServicePaginationReq`](ShiftsGroupsServicePaginationReq.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:896](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/shifts_groups.scailo_pb.ts#L896)

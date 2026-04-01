[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCParamsServicePaginationReq

# Class: QCParamsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.QCParamsServicePaginationReq

## Hierarchy

- `Message`\<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\>

  ↳ **`QCParamsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](QCParamsServicePaginationReq.md#constructor)

### Properties

- [count](QCParamsServicePaginationReq.md#count)
- [isActive](QCParamsServicePaginationReq.md#isactive)
- [offset](QCParamsServicePaginationReq.md#offset)
- [sortKey](QCParamsServicePaginationReq.md#sortkey)
- [sortOrder](QCParamsServicePaginationReq.md#sortorder)
- [status](QCParamsServicePaginationReq.md#status)
- [fields](QCParamsServicePaginationReq.md#fields)
- [runtime](QCParamsServicePaginationReq.md#runtime)
- [typeName](QCParamsServicePaginationReq.md#typename)

### Methods

- [clone](QCParamsServicePaginationReq.md#clone)
- [equals](QCParamsServicePaginationReq.md#equals)
- [fromBinary](QCParamsServicePaginationReq.md#frombinary)
- [fromJson](QCParamsServicePaginationReq.md#fromjson)
- [fromJsonString](QCParamsServicePaginationReq.md#fromjsonstring)
- [getType](QCParamsServicePaginationReq.md#gettype)
- [toBinary](QCParamsServicePaginationReq.md#tobinary)
- [toJSON](QCParamsServicePaginationReq.md#tojson)
- [toJson](QCParamsServicePaginationReq.md#tojson-1)
- [toJsonString](QCParamsServicePaginationReq.md#tojsonstring)
- [equals](QCParamsServicePaginationReq.md#equals-1)
- [fromBinary](QCParamsServicePaginationReq.md#frombinary-1)
- [fromJson](QCParamsServicePaginationReq.md#fromjson-1)
- [fromJsonString](QCParamsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServicePaginationReq**(`data?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Overrides

Message\&lt;QCParamsServicePaginationReq\&gt;.constructor

#### Defined in

[src/qc_params.scailo_pb.ts:501](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L501)

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

[src/qc_params.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L454)

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

[src/qc_params.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L438)

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

[src/qc_params.scailo_pb.ts:470](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L470)

___

### sortKey

• **sortKey**: [`QC_PARAM_SORT_KEY`](../enums/QC_PARAM_SORT_KEY.md) = `QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.QC_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_params.scailo_pb.ts:492](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L492)

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

[src/qc_params.scailo_pb.ts:482](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L482)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this qc param

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/qc_params.scailo_pb.ts:499](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L499)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params.scailo_pb.ts:508](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L508)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params.scailo_pb.ts:506](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L506)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCParamsServicePaginationReq"``

#### Defined in

[src/qc_params.scailo_pb.ts:507](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L507)

## Methods

### clone

▸ **clone**(): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md) \| `PlainMessage`\<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md) \| `PlainMessage`\<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md) \| `PlainMessage`\<[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params.scailo_pb.ts:529](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L529)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Defined in

[src/qc_params.scailo_pb.ts:517](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L517)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Defined in

[src/qc_params.scailo_pb.ts:521](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L521)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServicePaginationReq`](QCParamsServicePaginationReq.md)

#### Defined in

[src/qc_params.scailo_pb.ts:525](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/qc_params.scailo_pb.ts#L525)

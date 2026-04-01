[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServicePaginationResponse

# Class: WorkOrdersServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.WorkOrdersServicePaginationResponse

## Hierarchy

- `Message`\<[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)\>

  ↳ **`WorkOrdersServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServicePaginationResponse.md#constructor)

### Properties

- [count](WorkOrdersServicePaginationResponse.md#count)
- [offset](WorkOrdersServicePaginationResponse.md#offset)
- [payload](WorkOrdersServicePaginationResponse.md#payload)
- [total](WorkOrdersServicePaginationResponse.md#total)
- [fields](WorkOrdersServicePaginationResponse.md#fields)
- [runtime](WorkOrdersServicePaginationResponse.md#runtime)
- [typeName](WorkOrdersServicePaginationResponse.md#typename)

### Methods

- [clone](WorkOrdersServicePaginationResponse.md#clone)
- [equals](WorkOrdersServicePaginationResponse.md#equals)
- [fromBinary](WorkOrdersServicePaginationResponse.md#frombinary)
- [fromJson](WorkOrdersServicePaginationResponse.md#fromjson)
- [fromJsonString](WorkOrdersServicePaginationResponse.md#fromjsonstring)
- [getType](WorkOrdersServicePaginationResponse.md#gettype)
- [toBinary](WorkOrdersServicePaginationResponse.md#tobinary)
- [toJSON](WorkOrdersServicePaginationResponse.md#tojson)
- [toJson](WorkOrdersServicePaginationResponse.md#tojson-1)
- [toJsonString](WorkOrdersServicePaginationResponse.md#tojsonstring)
- [equals](WorkOrdersServicePaginationResponse.md#equals-1)
- [fromBinary](WorkOrdersServicePaginationResponse.md#frombinary-1)
- [fromJson](WorkOrdersServicePaginationResponse.md#fromjson-1)
- [fromJsonString](WorkOrdersServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServicePaginationResponse**(`data?`): [`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)\> |

#### Returns

[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

#### Overrides

Message\&lt;WorkOrdersServicePaginationResponse\&gt;.constructor

#### Defined in

[src/work_orders.scailo_pb.ts:1360](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1360)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Description`**

Number of records returned in the current response slice.

**`Example`**

```ts
50
```

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/work_orders.scailo_pb.ts:1330](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1330)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Description`**

The offset provided in the request.

**`Example`**

```ts
0
```

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/work_orders.scailo_pb.ts:1340](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1340)

___

### payload

• **payload**: [`WorkOrder`](WorkOrder.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.WorkOrder payload = 4;

#### Defined in

[src/work_orders.scailo_pb.ts:1358](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1358)

___

### total

• **total**: `bigint` = `protoInt64.zero`

**`Description`**

The total number of records matching the criteria.

**`Example`**

```ts
1250
```

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/work_orders.scailo_pb.ts:1350](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1350)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/work_orders.scailo_pb.ts:1367](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1367)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/work_orders.scailo_pb.ts:1365](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1365)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServicePaginationResponse"``

#### Defined in

[src/work_orders.scailo_pb.ts:1366](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1366)

## Methods

### clone

▸ **clone**(): [`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md) \| `PlainMessage`\<[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/work_orders.scailo_pb.ts:1386](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1386)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1374](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1374)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1378](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1378)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServicePaginationResponse`](WorkOrdersServicePaginationResponse.md)

#### Defined in

[src/work_orders.scailo_pb.ts:1382](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/work_orders.scailo_pb.ts#L1382)

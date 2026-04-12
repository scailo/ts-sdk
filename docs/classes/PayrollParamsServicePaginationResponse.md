[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParamsServicePaginationResponse

# Class: PayrollParamsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.PayrollParamsServicePaginationResponse

## Hierarchy

- `Message`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\>

  ↳ **`PayrollParamsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PayrollParamsServicePaginationResponse.md#constructor)

### Properties

- [count](PayrollParamsServicePaginationResponse.md#count)
- [offset](PayrollParamsServicePaginationResponse.md#offset)
- [payload](PayrollParamsServicePaginationResponse.md#payload)
- [total](PayrollParamsServicePaginationResponse.md#total)
- [fields](PayrollParamsServicePaginationResponse.md#fields)
- [runtime](PayrollParamsServicePaginationResponse.md#runtime)
- [typeName](PayrollParamsServicePaginationResponse.md#typename)

### Methods

- [clone](PayrollParamsServicePaginationResponse.md#clone)
- [equals](PayrollParamsServicePaginationResponse.md#equals)
- [fromBinary](PayrollParamsServicePaginationResponse.md#frombinary)
- [fromJson](PayrollParamsServicePaginationResponse.md#fromjson)
- [fromJsonString](PayrollParamsServicePaginationResponse.md#fromjsonstring)
- [getType](PayrollParamsServicePaginationResponse.md#gettype)
- [toBinary](PayrollParamsServicePaginationResponse.md#tobinary)
- [toJSON](PayrollParamsServicePaginationResponse.md#tojson)
- [toJson](PayrollParamsServicePaginationResponse.md#tojson-1)
- [toJsonString](PayrollParamsServicePaginationResponse.md#tojsonstring)
- [equals](PayrollParamsServicePaginationResponse.md#equals-1)
- [fromBinary](PayrollParamsServicePaginationResponse.md#frombinary-1)
- [fromJson](PayrollParamsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PayrollParamsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParamsServicePaginationResponse**(`data?`): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\> |

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Overrides

Message\&lt;PayrollParamsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/payroll_params.scailo_pb.ts:579](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L579)

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

[src/payroll_params.scailo_pb.ts:549](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L549)

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

[src/payroll_params.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L559)

___

### payload

• **payload**: [`PayrollParam`](PayrollParam.md)[] = `[]`

**`Description`**

The array of records for the current page.

**`Generated`**

from field: repeated Scailo.PayrollParam payload = 4;

#### Defined in

[src/payroll_params.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L577)

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

[src/payroll_params.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L569)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_params.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L586)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_params.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L584)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParamsServicePaginationResponse"``

#### Defined in

[src/payroll_params.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L585)

## Methods

### clone

▸ **clone**(): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md) \| `PlainMessage`\<[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_params.scailo_pb.ts:605](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L605)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:593](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L593)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:597](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L597)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServicePaginationResponse`](PayrollParamsServicePaginationResponse.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:601](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/payroll_params.scailo_pb.ts#L601)
